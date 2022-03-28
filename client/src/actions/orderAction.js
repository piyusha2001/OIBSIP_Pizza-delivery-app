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
					if (data.message === 'Payment verified successfully') {
						dispatch({
							type: 'ORDER_VERIFY_SUCCESS',
						});
					} else {
						alert('Payment failed');
					}
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
		if (data.status === 'created') {
			dispatch({
				type: 'ORDER_CREATED_SUCCESS',
			});
		} else {
			dispatch({
				type: 'PLACE_ORDER_LOADING',
			});
		}
		initPayment(data.data);
	} catch (error) {
		console.log(error);
		dispatch({
			type: 'PLACE_ORDER_FAILED',
		});
	}
};

export const getUserOrders = () => async (dispatch) => {
	dispatch({ type: 'GET_USER_ORDERS_REQUEST' });
	const user = JSON.parse(localStorage.getItem('user'));

	try {
		const response = await axios.get(
			'http://localhost:8080/api/payment/getuserorders',
			{ userId: user._id },
		);
		// console.log(response);
		dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
	}
};
