const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
	firstName: { type: 'string', required: true },
	lastName: { type: 'string', required: true },
	email: { type: 'string', required: true },
	password: { type: 'string', required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: '7d',
	});
	return token;
};

const User = mongoose.model('user', userSchema);


};