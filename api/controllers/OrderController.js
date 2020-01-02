const mongoose = require('mongoose');

const Order = mongoose.model('Order');
const User = mongoose.model('User');
const Movie = mongoose.model('Movie');
const Payment = mongoose.model('Payment');
const OrderRegistration = mongoose.model('OrderRegistration');

const PaymentValidation = require('./validations/PaymentValidation');
const EmailController = require('./EmailController');

class OrderController {
	// ADMIN
	// GET /admin - indexAdmin
	async indexAdmin(req, res, next) {
		const { offset, limit } = req.query;
		try {
			const orders = await Order.paginate(
				{},
				{
					offset: Number(offset || 0),
					limit: Number(limit || 30),
					populate: ['payment', 'user'],
				}
			);
			orders.docs = await Promise.all(
				orders.docs.map(async order => {
					order.cart = await Promise.all(
						order.cart.map(async item => {
							item.movie = await Movie.findById(item.movie);
							return item;
						})
					);
					return order;
				})
			);
			return res.send({ orders });
		} catch (e) {
			next(e);
		}
	}
	// GET /admin/:id - showAdmin

	async showAdmin(req, res, next) {
		try {
			const order = await Order.findOne({
				_id: req.params.id,
			})
				.populate({ path: 'user', select: ['id', 'email', 'movies', 'name', 'reviews', 'role'] })
				.populate('payment');
			order.cart = await Promise.all(
				order.cart.map(async item => {
					item.movie = await Movie.findById(item.movie);
					return item;
				})
			);

			const registration = await OrderRegistration.find({ order: order._id });
			return res.send({ order, registration });
		} catch (e) {
			next(e);
		}
	}
	// REMOVE /admin/:id - removeAdmin

	async deleteAdmin(req, res, next) {
		try {
			const order = await Order.findOne({
				_id: req.params.id,
			}).populate('user');
			if (!order) return res.status(400).send({ error: 'Order not found' });
			order.cancelled = true;

			const orderRegistration = new OrderRegistration({
				order: order._id,
				type: 'Order',
				status: 'order_cancelled',
			});

			await order.save();
			await orderRegistration.save();

			// Send Email to customer - Order Cancelled
			//EmailController.cancelOrder({ user: order.user, order });

			return res.send({ cancelled: true });
		} catch (e) {
			next(e);
		}
	}
	// GET /admin/:id/cart - showCartOrderAdmin
	async showCartOrderAdmin(req, res, next) {
		try {
			const order = await Order.findOne({
				_id: req.params.id,
			});
			order.cart = await Promise.all(
				order.cart.map(async item => {
					item.movie = await Movie.findById(item.movie);

					return item;
				})
			);

			return res.send({ cart: order.cart });
		} catch (e) {
			next(e);
		}
	}

	// User

	// GET / - index
	async index(req, res, next) {
		const { offset, limit } = req.query;
		try {
			const user = await User.findOne({ _id: req.payload.id });
			const orders = await Order.paginate(
				{ user: user._id },
				{
					offset: Number(offset || 0),
					limit: Number(limit || 30),
					populate: ['payment'],
				}
			);
			orders.docs = await Promise.all(
				orders.docs.map(async order => {
					order.cart = await Promise.all(
						order.cart.map(async item => {
							item.movie = await Movie.findById(item.movie);
							return item;
						})
					);
					console.log(order);
					return order;
				})
			);
			return res.send({ orders });
		} catch (e) {
			next(e);
		}
	}
	// GET /:id - show

	async show(req, res, next) {
		try {
			const user = await User.findOne({ _id: req.payload.id });
			const order = await Order.findOne({
				user: user._id,
				_id: req.params.id,
			}).populate(['payment']);
			order.cart = await Promise.all(
				order.cart.map(async item => {
					item.movie = await Movie.findById(item.movie);
					return item;
				})
			);

			const regostration = await OrderRegistration.find({ order: order._id });
			return res.send({ order, regostration });
		} catch (e) {
			next(e);
		}
	}
	// POST /:id - create

	async create(req, res, next) {
		const { cart, payment } = req.body;
		const _cart = cart.slice();

		try {
			// Check data in cart
			//if (!(await CartValidation(cart))) return res.status(422).send({ error: 'Invalid Cart' });

			const user = await User.findOne({ _id: req.payload.id });

			// Check payment data
			if (!(await PaymentValidation.checkTotalCost({ cart, payment })))
				return res.status(422).send({ error: 'Invalid payment data' });

			// Check Credit Card
			//if (!(await PaymentValidation.checkCreditCard(payment))) return res.status(422).send({ error: 'Invalid payment data with credit card' });

			const newPayment = new Payment({
				paymentTotal: payment.paymentTotal,
				paymentOption: payment.paymentOption,
				paymentStatus: 'Initated',
			});

			const order = new Order({
				user: user._id,
				cart: _cart,
				payment: newPayment._id,
			});

			newPayment.order = order._id;

			await order.save();
			await newPayment.save();

			const orderRegistration = new OrderRegistration({
				order: order._id,
				type: 'Order',
				status: 'order_created',
			});

			await orderRegistration.save();

			// NOTIFY CUSTOMER VIA EMAIL
			EmailController.sendNewOrder({ order, user });
			/*
			const administrators = await User.find({ role: 'admin', store });
			administrators.forEach(user => {
				EmailController.sendNewOrder({ order, user: user });
            });
            */

			return res.send({
				order: Object.assign({}, order._doc, {
					payment: newPayment,
					user: {
						name: user.name,
						email: user.email,
					},
				}),
			});
		} catch (e) {
			next(e);
		}
	}
	// DELETE /:id -
	async delete(req, res, next) {
		try {
			const user = await User.findOne({ _id: req.payload.id });
			if (!user) return res.status(400).send({ error: 'User not found' });
			const order = await Order.findOne({
				user: user._id,
				_id: req.params.id,
			});
			if (!order) return res.status(400).send({ error: 'Order not found' });
			order.cancelled = true;

			const orderRegistration = new OrderRegistration({
				order: order._id,
				type: 'Order',
				status: 'order_cancelled',
			});

			await orderRegistration.save();

			// Send Email to customer - Order Cancelled
			/*
			const administrators = await User.find({ role: 'admin'});
			administrators.forEach(user => {
				EmailController.cancelOrder({ order, user: user });
            });
            */

			return res.send({ cancelled: true });
		} catch (e) {
			next(e);
		}
	}

	// GET /:id/cart - showCartOrder
	async showCartOrder(req, res, next) {
		try {
			const user = await User.findOne({ _id: req.payload.id });
			const order = await Order.findOne({
				user: user._id,
				_id: req.params.id,
			});
			order.cart = await Promise.all(
				order.cart.map(async item => {
					item.movie = await Movie.findById(item.movie);

					return item;
				})
			);

			return res.send({ cart: order.cart });
		} catch (e) {
			next(e);
		}
	}
}

module.exports = OrderController;
