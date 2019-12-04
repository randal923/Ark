const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const ActorValidation = {
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
	delete: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
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

module.exports = { ActorValidation };
