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
		let totalCost = 0;
		await Promise.all(
			cart.map(async item => {
				item.movie = await Movie.findById(item.movie);
				if (!item.salePrice) item.salePrice = 0;
				totalCost += item.unitPrice - item.salePrice;
			})
		);
		return totalCost.toFixed(2);
	} catch (e) {
		next(e);
		return false;
	}
};

module.exports = { PaymentValidation, checkTotalCost };
