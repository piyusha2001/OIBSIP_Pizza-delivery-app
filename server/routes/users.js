const router = require('express').Router();
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
const Token = require('../models/token');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

router.post('/', async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: 'User with given email already Exist!' });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body, password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString('hex'),
		}).save();

		const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
		await sendEmail(
			user.email,
			'Verify Email',
			`Verify your account by clicking on this link --> ${url} . Thank you !`,
		);

		res.status(201).send({
			message:
				'An Email sent to your account please verify ! Check in spam folder too',
		});
	} catch (error) {
		res.status(500).send({ message: 'Internal Server Error' });
	}
});

router.get('/:id/verify/:token/', async (req, res) => {
	const user = await User.findOne({ _id: req.params.id });
	try {
		if (!user)
			return res
				.status(400)
				.send({ success: false, message: 'Invalid link' });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token)
			return res
				.status(400)
				.send({ success: false, message: 'Invalid link' });

		await User.findOneAndUpdate({ _id: user._id }, { verified: true });
		await token.remove();

		res.status(200).send({
			success: true,
			message: 'Email verified successfully',
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: 'Internal Server Error',
		});
	}
});
router.get('/getallusers', async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

module.exports = router;
