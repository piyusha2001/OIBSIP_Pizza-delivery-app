const mongoose = require('mongoose');

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB);
	} catch (error) {
		console.log('could not connect to database');
	}
};
