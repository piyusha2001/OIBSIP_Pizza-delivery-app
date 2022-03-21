import axios from 'axios';

export const getAllPizzaS = () => (dispatch) => {
	dispatch({ type: 'GET_PIZZAS_REQUEST' });

	try {
		const response = axios.get('localhost:8080/api/pizzas/getpizzas');
		console.log(response);
		dispatch({ type: 'GET_PIZZAS_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'GET_PIZZAS_FAILED' });
	}
};
