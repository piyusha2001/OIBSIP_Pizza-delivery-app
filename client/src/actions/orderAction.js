import axios from 'axios';

export const placeOrder = (subtotal) => async (dispatch, getState) => {
	dispatch({ type: 'PLACE_ORDER_ REQUEST ' });
	const cartItems = getState().cartReducer.cartItems;
	const user = JSON.parse(localStorage.getItem('user'));

	const initPayment = (data) => {
		const options = {
			key: 'rzp_test_ZHZ9jDKgl6tz9U',
			amount: data.amount,
			currency: data.currency,
			description: 'Test Transaction',
			order_id: data.id,
			handler: async (response) => {
				try {
					const { data } = await axios.post(
						'http://localhost:8080/api/payment/verifypayment',
						//post user to backend
						{
							paymentId: response.razorpay_payment_id,
							orderId: response.razorpay_order_id,
							signature: response.razorpay_signature,
							firstname: user.firstName,
							lastname: user.lastName,
							id: user._id,
							email: user.email,
							address: user.address,
							cartItems,
							subtotal,
						},
					);

					console.log(data.message);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: '#3399cc',
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	try {
		const { data } = await axios.post(
			'http://localhost:8080/api/payment/orders',
			{ subtotal },
		);

		console.log(data);
		initPayment(data.data);
		dispatch({ type: 'PLACE_ORDER_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'PLACE_ORDER_FAILURE' });
		console.log(error);
	}
};
