const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);

const UserValidation = {
	show: {
		params: {
			id: Joi.string()
				.alphanum()
				.length(24)
				.required(),
		},
	},
	searchOrders: {
		query: {
			offset: Joi.number(),
			limit: Joi.number(),
		},
		params: {
			search: Joi.string().required(),
		},
	},
	create: {
		body: {
			name: Joi.string().required(),
			email: Joi.string()
				.email()
				.required(),
			password: Joi.string().required(),
		},
	},
	update: {
		body: {
			name: Joi.string().optional(),
			email: Joi.string()
				.email()
				.optional(),
			password: Joi.string().optional(),
		},
	},
	login: {
		body: {
			email: Joi.string()
				.email()
				.required(),
			password: Joi.string().required(),
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

module.exports = { UserValidation };
