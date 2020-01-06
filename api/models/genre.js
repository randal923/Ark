const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema(
	{
		name: { type: String, unique: true },
		movies: { type: [{ type: Schema.Types.ObjectId, ref: 'Movie' }] },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Genre', GenreSchema);
