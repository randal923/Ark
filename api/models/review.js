const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
	{
		name: { type: String, required: true },
		text: { type: String, required: true },
		stars: { type: Number, default: 0 },
		movie: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Review', ReviewSchema);
