const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const OrderSchema = Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		cart: {
			type: [
				{
					movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
					unitPrice: { type: Number, required: true },
				},
			],
		},
		payment: { type: Schema.Types.ObjectId, ref: 'Payment', required: true },
		cancelled: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

OrderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Order', OrderSchema);
