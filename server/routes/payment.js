const router = require('express').Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/orderModel');

//create orders
router.post('/orders', async (req, res) => {
	const { subtotal } = req.body;
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: subtotal * 100,
			currency: 'INR',
			receipt: crypto.randomBytes(10).toString('hex'),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({
					message: 'Something Went Wrong!',
				});
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

//payment verify
router.post('/verifypayment', async (req, res) => {
	try {
		const {
			paymentId,
			orderId,
			signature,
			firstname,
			lastname,
			email,
			id,
			address,
			cartItems,
			subtotal,
		} = await req.body;
		console.log(cartItems);
		console.log(subtotal);
		const sign = orderId + '|' + paymentId;

		const expectedSign = crypto
			.createHmac('sha256', process.env.KEY_SECRET)
			.update(sign.toString())
			.digest('hex');

		if (signature === expectedSign) {
			const newOrder = new Order({
				name: firstname + ' ' + lastname,
				email: email,
				userid: id,
				orderItems: cartItems,
				shippingAddress: address,
				orderAmount: subtotal,
				transactionId: orderId,
			});
			console.log(newOrder);
			newOrder.save();
			if (newOrder) {
				return res
					.status(200)
					.json({ message: 'Payment verified successfully' });
			} else {
				return res
					.status(400)
					.json({ message: 'Payment not verified' });
			}
		} else {
			return res.status(400).json({ message: 'Invalid signature sent' });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

module.exports = router;
