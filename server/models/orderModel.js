const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		userid: { type: String, required: true },
		orderItems: [],
		shippingAddress: { type: String, required: true },
		orderAmount: { type: Number, required: true },
		isDelivered: { type: Boolean, default: false },
		orderId: { type: String, required: true },
		paymentId: { type: String, required: true },
	},
	{ timestamps: true },
);

module.exports = mongoose.model('orders', orderSchema);
