const mongoose = require('mongoose');
const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

//const EmailController = require('./emailController');

const Payment = mongoose.model('Payment');
const Movie = mongoose.model('Movie');
const Order = mongoose.model('Order');
const User = mongoose.model('User');
const OrderRegistration = mongoose.model('OrderRegistration');

// Stripe
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require('stripe')(keySecret);

class PaymentController {
	async payment(req, res, next) {
		try {
			res.render('stripe/index');
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
					await user.save();
					return item;
				})
			);

			// Remove . from total amount
			const amount = payment.paymentTotal
				.toString()
				.split('.')
				.join('');

			// Charge customer
			const payload = await stripe.charges.create({
				amount: Number(amount),
				currency: 'usd',
				description: 'Example charge',
				source: token,
			});

			payment.payload = payment.payload ? payment.payload.concat([payload]) : [payload];

			if (payload) payment.paymentStatus = 'Completed';
			await payment.save();

			return res.send({ order });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = PaymentController;
