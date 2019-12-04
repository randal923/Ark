const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderRegistrationSchema = Schema(
	{
		order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
		type: { type: String, required: true },
		status: { type: String, required: true },
		date: { type: Date, default: Date.now },
		payload: { type: Object },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('OrderRegistration', OrderRegistrationSchema);
