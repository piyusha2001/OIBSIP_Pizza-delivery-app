const mongoose = require('mongoose');

const baseSchema = new mongoose.Schema(
	{
		name: { type: 'string', required: true },
		varients: [],
		prices: [],
		stock: { type: Number, required: true },
	},
	{
		timestamps: true,
	},
);

const baseModel = mongoose.model('bases', baseSchema);

module.exports = baseModel;
