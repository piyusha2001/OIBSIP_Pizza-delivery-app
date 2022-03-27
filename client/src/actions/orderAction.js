import axios from 'axios';

export const placeOrder = (subtotal) => async (dispatch, getState) => {
	dispatch({ type: 'PLACE_ORDER_ REQUEST ' });
	const cartItems = getState().cartReducer.cartItems;

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
						response,
					);
					console.log(data);
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
			{ subtotal, cartItems },
		);

		console.log(data);
		initPayment(data.data);
		dispatch({ type: 'PLACE_ORDER_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'PLACE_ORDER_FAILURE' });
		console.log(error);
	}
};
