const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const WriterValidation = {
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
			name: Joi.string(),
			movies: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
						.required()
				)
				.optional(),
		},
	},
	update: {
		body: {
			name: Joi.string(),
		},
	},
	delete: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
			movies: Joi.array()
				.items(
					Joi.string()
						.alphanum()
						.length(24)
						.required()
				)
				.optional(),
		},
	},
	showMovies: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
			limit: Joi.number().required(),
			offset: Joi.number().required(),
		},
	},
};

module.exports = { WriterValidation };
