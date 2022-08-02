const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
	try {
		const token = req.header('Authorization');
		if (!token)
			return res.status(400).json({ msg: 'Invalid Authentication' });

		jwt.verify(token, process.env.JWTPRIVATEKEY, (err, user) => {
			if (err)
				return res.status(400).json({ msg: 'Invalid Authentication' });

			req.user = user;
			next();
		});
	} catch (err) {
		return res.status(500).json({ msg: err.message });
	}
};

module.exports = authentication;
