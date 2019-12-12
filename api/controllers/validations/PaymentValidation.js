const mongoose = require('mongoose');
const Joi = require('joi');

const Movie = mongoose.model('Movie');
const PaymentValidation = {
	show: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	charge: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
		body: {
			token: Joi.string().required(),
		},
	},
	update: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
		body: {
			status: {
				id: Joi.string().optional(),
			},
		},
	},
};

const checkTotalCost = async ({ cart, payment }) => {
	try {
		const _cart = await Promise.all(
			cart.map(async item => {
				const movie = await Movie.findById(item.movie);
				return { price: movie.price, salePrice: movie.salePrice || 0 };
			})
		);

		const totalCost = _cart.reduce((acc, { price, salePrice }) => {
			return salePrice > 0 ? acc + salePrice : acc + price;
		}, 0);
		return totalCost === payment.paymentTotal;
	} catch (e) {
		console.log(e);
		return false;
	}
};

module.exports = { PaymentValidation, checkTotalCost };
