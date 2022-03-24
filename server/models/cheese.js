const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema(
	{
		name: { type: 'string', required: true },
		stock: { type: Number, required: true },
	},
	{
		timestamps: true,
	},
);

const cheeseModel = mongoose.model('cheese', cheeseSchema);

module.exports = cheeseModel;
