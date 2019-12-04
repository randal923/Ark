const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const MovieValidation = {
	show: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	create: {
		body: {
			title: Joi.string().required(),
			releasedate: Joi.string().required(),
			duration: Joi.string().required(),
			price: Joi.number().required(),
			salePrice: Joi.number().optional(),
			description: Joi.string().required(),
			subtitles: Joi.array().items(Joi.string()),
			directors: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
						.required()
				)
				.required(),
			genre: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
						.required()
				)
				.required(),
			writers: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
						.required()
				)
				.required(),
		},
	},
	update: {
		body: {
			title: Joi.string().optional(),
			releasedate: Joi.string().optional(),
			duration: Joi.string().optional(),
			price: Joi.number().optional(),
			salePrice: Joi.number().optional(),
			description: Joi.string().optional(),
			subtitles: Joi.array().items(Joi.string()),
			directors: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
				)
				.optional(),
			genre: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
				)
				.optional(),
			writers: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
				)
				.optional(),
		},
	},
	updateImages: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	search: {
		query: {
			limit: Joi.number(),
			offset: Joi.number(),
			sortType: Joi.string(),
		},
		params: {
			search: Joi.string().required(),
		},
	},
	delete: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	showReviews: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
};

module.exports = { MovieValidation };
