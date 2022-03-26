import axios from 'axios';

export const placeOrder = (subtotal) => async (dispatch, getState) => {
	dispatch({ type: 'PLACE_ORDER_ REQUEST ' });
	const cartItems = getState().cartReducer.cartItems;

	try {
		const { data } = await axios.post(
			'http://localhost:8080/api/payment/orders',
			{ subtotal, cartItems },
		);
		dispatch({ type: 'PLACE_ORDER_SUCCESS' });
		console.log(data);
	} catch (error) {
		dispatch({ type: 'PLACE_ORDER_FAILURE' });
		console.log(error);
	}
};
