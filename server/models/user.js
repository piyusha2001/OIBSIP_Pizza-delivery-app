const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
	firstName: { type: 'string', required: true },
	lastName: { type: 'string', required: true },
	address: { type: 'string', required: true },
	email: { type: 'string', required: true },
	password: { type: 'string', required: true },
	verified: { type: 'boolean', default: false },
	role: { type: 'string', default: 'user', enum: ['user', 'admin'] },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ _id: this._id, role: this.role },
		process.env.JWTPRIVATEKEY,
		{
			expiresIn: '7d',
		},
	);
	return token;
};

const User = mongoose.model('user', userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label('First Name'),
		lastName: Joi.string().required().label('Last Name'),
		email: Joi.string().email().required().label('Email'),
		address: Joi.string().required().label('Address'),
		password: passwordComplexity().required().label('Password'),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
