const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new Schema(
	{
		name: { type: String, required: [true, "Can't be blank."] },
		email: {
			type: String,
			lowercase: true,
			unique: true,
			required: [true, "Can't be blank."],
			index: true,
			match: [/\S+@\S+\.\S+/, 'Invalid Email'],
		},
		role: { type: Array, default: ['customer', 'admin', 'owners'] },
		deleted: { type: Boolean, default: false },
		hash: String,
		salt: String,
		recovery: {
			type: { token: String, date: Date },
			default: {},
		},
		movies: { type: [{ type: Schema.Types.ObjectId, ref: 'Movie' }] },
		reviews: { type: [{ type: Schema.Types.ObjectId, ref: 'Review' }] },
	},
	{ timestamps: true }
);

UserSchema.plugin(uniqueValidator, {
	message: 'This email is already being used.',
});

UserSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function(password) {
	const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return hash === this.hash;
};

UserSchema.methods.generateToken = function() {
	const today = new Date();
	const exp = new Date(today);
	exp.setDate(today.getDate() + 15);

	return jwt.sign(
		{
			id: this._id,
			name: this.name,
			email: this.email,
			reviews: this.reviews,
			exp: parseFloat(exp.getTime() / 1000, 10),
		},
		secret
	);
};

UserSchema.methods.sendAuthJSON = function() {
	return {
		name: this.name,
		email: this.email,
		role: this.role,
		deleted: this.deleted,
		reviews: this.reviews,
		token: this.generateToken(),
	};
};

//Password Recovery
UserSchema.methods.createPasswordRecoveryToken = function() {
	this.recovery = {};
	this.recovery.token = crypto.randomBytes(16).toString('hex');
	this.recovery.date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	return this.recovery;
};

UserSchema.methods.deletePasswordRecoveryToken = function() {
	this.recovery = { token: null, date: null };
	return this.recovery;
};

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);
