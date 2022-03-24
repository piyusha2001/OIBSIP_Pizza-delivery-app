const mongoose = require('mongoose');

const saucesSchema = new mongoose.Schema(
	{
		name: { type: 'string', required: true },
		stock: { type: Number, required: true },
	},
	{
		timestamps: true,
	},
);

const saucesModel = mongoose.model('sauces', saucesSchema);

module.exports = saucesModel;
