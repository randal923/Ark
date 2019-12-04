const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const ReviewValidation = {
	index: {
		query: {
			movie: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	show: {
		query: {
			movie: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	create: {
		query: {
			movie: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
		body: {
			name: Joi.string().required(),
			text: Joi.string().required(),
			star: Joi.number()
				.min(1)
				.max(5)
				.required(),
		},
	},
	update: {
		body: {
			name: Joi.string().optional(),
			text: Joi.string().optional(),
			stars: Joi.number().optional(),
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
};

module.exports = { ReviewValidation };
