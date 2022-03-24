const mongoose = require('mongoose');

const toppingsSchema = new mongoose.Schema(
	{
		name: { type: 'string', required: true },
		stock: { type: Number, required: true },
	},
	{
		timestamps: true,
	},
);

const toppingsModel = mongoose.model('toppings', toppingsSchema);

module.exports = toppingsModel;
