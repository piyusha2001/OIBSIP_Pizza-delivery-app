const router = require('express').Router();
const { User } = require('../models/user');
const Token = require('../models/token');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
	try {
		const emailSchema = Joi.object({
			email: Joi.string().email().required().label('Email'),
		});
		const { error } = emailSchema.validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
	} catch (error) {
		res.status(500).send({ message: 'Internal Server Error' });
	}
});

module.exports = router;
