const mongoose = require('mongoose');
const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

const Payment = mongoose.model('Payment');
const Movie = mongoose.model('Movie');
const Order = mongoose.model('Order');
const User = mongoose.model('User');
const OrderRegistration = mongoose.model('OrderRegistration');

// Stripe
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require('stripe')(keySecret);

// Email
const EmailController = require('./emailController');

class PaymentController {
	async payment(req, res, next) {
		try {
			res.render('stripe/index');
		} catch (e) {
			next(e);
		}
	}

	async show(req, res, next) {
		try {
			const payment = await Payment.findOne({ _id: req.params.id });
			if (!payment) return res.status(400).send({ error: 'Payment does not exist' });

			res.send({ Total: payment.paymentTotal, Status: payment.paymentStatus, Option: payment.paymentOption });
		} catch (e) {
			next(e);
		}
	}
	async charge(req, res, next) {
		try {
			const payment = await Payment.findOne({ _id: req.params.id });
			if (!payment) return res.status(400).send({ error: 'Payment does not exist.' });
			const token = req.body.token;
			const order = await Order.findById(payment.order).populate([{ path: 'payment' }]);
			const user = await User.findById(order.user);

			order.cart = await Promise.all(
				order.cart.map(async item => {
					item.movie = await Movie.findById(item.movie);
					user.movies.push(item.movie);
				})
			);

			// Save user after pushing movies to it
			await user.save();

			// Charge customer
			const payload = await stripe.charges.create({
				amount: payment.paymentTotal * 100,
				currency: 'usd',
				description: 'Example charge',
				source: token,
			});

			payment.payload = payment.payload ? payment.payload.concat([payload]) : [payload];

			if (payload) payment.paymentStatus = 'Completed';
			await payment.save();

			// NOTIFY CUSTOMER VIA EMAIL
			EmailController.completeOrder({ order, user });

			return res.send({ order });
		} catch (e) {
			next(e);
		}
	}

	// ADMIN
	async update(req, res, next) {
		const { status } = req.body;
		try {
			const payment = await Payment.findOne({ _id: req.params.id });
			if (!payment) return res.status(400).send({ error: "Payment doesn't exist" });

			if (status) payment.paymentStatus = status;

			const orderRegistration = new OrderRegistration({
				order: payment.order,
				type: 'payment',
				status: status,
			});

			await orderRegistration.save();

			// Email customer
			const order = await Order.findById(payment.order).populate('user');
			EmailController.updateOrder({
				user: order.user,
				order,
				type: 'payment',
				status,
				date: new Date(),
			});

			await payment.save();

			return res.send({ payment });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = PaymentController;
