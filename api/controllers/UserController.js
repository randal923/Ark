const mongoose = require('mongoose');
const User = mongoose.model('User');
const Order = mongoose.model('Order');
const Movie = mongoose.model('Movie');

const sendEmailRecovery = require('../helpers/email-recovery');

class userController {
	// GET /search/:search/orders
	async searchOrders(req, res, next) {
		const { offset, limit } = req.query;
		try {
			const search = new RegExp(req.params.search, 'i');
			const users = await User.find({ name: { $regex: search } });
			const orders = await Order.paginate(
				{ user: { $in: users.map(item => item._id) } },
				{ offset, limit, populate: ['user', 'payment'] }
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

	//POST /register
	async create(req, res, next) {
		const { name, email, password } = req.body;
		try {
			if (!name || !email || !password) return res.status(422).json({ errors: 'Fill out all the empty fields.' });
			const user = new User({ name, email });
			user.setPassword(password);
			user.save();

			return res.json({ user: user.sendAuthJSON() });
		} catch (e) {
			next(e);
		}
	}

	//POST /login
	async login(req, res, next) {
		const { email, password } = req.body;

		try {
			const user = await User.findOne({ email });
			if (!user) return res.status(401).json({ errors: 'User not registered.' });
			if (!user.validatePassword(password)) return res.status(401).json({ errors: 'Invalid password.' });

			return res.send({ user: user.sendAuthJSON() });
		} catch (e) {
			next(e);
		}
	}

	//GET /
	async indexAdmin(req, res, next) {
		try {
			const offset = Number(req.query.offset) || 0;
			const limit = Number(req.query.limit) || 30;
			const users = await User.paginate({}, { offset, limit, populate: { path: 'user', select: '-salt -hash' } });
			return res.send({ users });
		} catch (e) {
			next(e);
		}
	}

	//GET /
	async index(req, res, next) {
		try {
			const user = await User.findById(req.payload.id);
			if (!user) return res.status(401).json({ errors: 'User not registered.' });
			return res.json({ user: user.sendAuthJSON() });
		} catch (e) {
			next(e);
		}
	}

	//Get /:id
	async show(req, res, next) {
		try {
			const user = await User.findById(req.params.id);
			if (!user) return res.status(401).json({ errors: 'User not registered.' });

			return res.json({
				user: {
					name: user.name,
					email: user.email,
					role: user.role,
					movies: user.movies,
				},
			});
		} catch (e) {
			next(e);
		}
	}

	//PUT /
	async update(req, res, next) {
		const { name, email, password } = req.body;
		try {
			const user = await User.findById(req.payload.id);
			if (!user) return res.status(401).json({ errors: 'User not registered.' });
			if (typeof name !== 'undefined') user.name = name;
			if (typeof email !== 'undefined') user.email = email;
			if (typeof password !== 'undefined') user.setPassword(password);

			user.save();
			return res.json({ user: user.sendAuthJSON() });
		} catch (e) {
			next(e);
		}
	}

	//Delete
	async delete(req, res, next) {
		try {
			const user = await User.findById(req.payload.id);
			if (!user) return res.status(401).json({ errors: 'User not registered.' });

			user.remove();
			return res.json({ deleted: true });
		} catch (e) {
			next(e);
		}
	}

	//Get /password-recovery
	showRecovery(req, res, next) {
		return res.render('recovery', { error: null, success: null });
	}

	//POST /password-recovery
	createRecovery(req, res, next) {
		const { email } = req.body;
		if (!email)
			return res.render('recovery', {
				error: "Email can't be blank",
				success: null,
			});

		User.findOne({ email })
			.then(user => {
				if (!user)
					return res.render('recovery', {
						error: 'No user with this email.',
						success: null,
					});
				const recoveryData = user.createPasswordRecoveryToken();
				return user.save().then(() => {
					sendEmailRecovery({ user, recovery: recoveryData }, (error = null, success = null) => {
						return res.render('recovery', { error, success });
					});
				});
			})
			.catch(next);
	}

	//GET /password-recovered
	showCompleteRecovery(req, res, next) {
		if (!req.query.token)
			return res.render('recovery', {
				error: 'Token not available',
				success: null,
			});
		User.findOne({ 'recovery.token': req.query.token })
			.then(user => {
				if (!user) return res.render('recovery', { error: 'No user with this token' });
				if (new Date(user.recovery.date) < new Date())
					return res.render('recovery', {
						error: 'Token has expired',
						success: null,
					});
				return res.render('recovery/store', {
					error: null,
					success: null,
					token: req.query.token,
				});
			})
			.catch(next);
	}

	//POST /password-recovered
	completeRecovery(req, res, next) {
		const { token, password } = req.body;
		if (!token || !password)
			return res.render('recovery/store', {
				error: 'Write your password again.',
				success: null,
				token: token,
			});

		User.findOne({ 'recovery.token': token }).then(user => {
			if (!user)
				return res.render('recovery', {
					error: 'User not identified.',
					success: null,
				});
			user.deletePasswordRecoveryToken();
			user.setPassword(password);
			return user
				.save()
				.then(() => {
					return res.render('recovery/store', {
						error: null,
						success: 'Password successfully recovered. Please, login again',
						token: null,
					});
				})
				.catch(next);
		});
	}
}

module.exports = userController;
