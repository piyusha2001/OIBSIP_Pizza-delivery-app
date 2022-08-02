import axios from 'axios';

export const placeOrder = (subtotal) => async (dispatch, getState) => {
	dispatch({ type: 'PLACE_ORDER_ REQUEST ' });
	const cartItems = getState().cart.cartItems;
	const user = getState().setUserData.userData;
	console.log(user);

	const initPayment = (data) => {
		const options = {
			key: process.env.KEY_ID,
			amount: data.amount,
			currency: data.currency,
			description: 'Test Transaction',
			order_id: data.id,
			handler: async (response) => {
				try {
					const { data } = await axios.post(
						'https://pizza-app-backend12.herokuapp.com/api/payment/verifypayment',
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
			'https://pizza-app-backend12.herokuapp.com/api/payment/orders',
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

export const getUserOrders = () => async (dispatch, getState) => {
	dispatch({ type: 'GET_USER_ORDERS_REQUEST' });
	const user = getState().setUserData.userData;

	try {
		const response = await axios.post(
			'https://pizza-app-backend12.herokuapp.com/api/payment/getuserorders',
			{ userId: user._id },
		);
		console.log(response);
		dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
	}
};

//get all orders
export const getAllOrders = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_ORDERS_REQUEST' });
	try {
		const response = await axios.get(
			'https://pizza-app-backend12.herokuapp.com/api/payment/getallorders',
		);
		console.log(response);
		dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_ORDERS_FAILED', payload: error });
	}
};

//check delivered order status
export const deliverOrder = (orderid) => async (dispatch) => {
	dispatch({ type: 'CHECK_ORDER_STATUS_REQUEST' });
	try {
		const response = await axios.post(
			'https://pizza-app-backend12.herokuapp.com/api/payment/deliverorder',
			{ orderid: orderid },
		);
		console.log(response);
		alert('Order Delivered');
		const orders = await axios.get(
			'https://pizza-app-backend12.herokuapp.com/api/payment/getallorders',
		);
		window.location.reload();
		console.log(orders);
		dispatch({
			type: 'CHECK_ORDER_STATUS_SUCCESS',
			payload: orders.data,
		});
	} catch (error) {
		dispatch({ type: 'CHECK_ORDER_STATUS_FAILED', payload: error });
	}
};
