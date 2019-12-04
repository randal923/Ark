const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const PaymentSchema = Schema(
	{
		paymentTotal: { type: Number, required: true },
		paymentOption: { type: String, required: true },
		paymentStatus: { type: String, required: true },
		order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
		payload: { type: Array },
	},
	{ timestamps: true }
);

PaymentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Payment', PaymentSchema);
