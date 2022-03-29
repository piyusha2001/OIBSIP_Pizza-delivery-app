import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
	dispatch({ type: 'GET_PIZZAS_REQUEST' });

	try {
		const response = await axios.get(
			'http://localhost:8080/api/pizzas/getallpizzas',
		);
		// console.log(response);
		dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_PIZZAS_FAILED', payload: error });
	}
};

export const addPizza = (pizza) => async (dispatch) => {
	dispatch({ type: 'ADD_PIZZA_REQUEST' });
	try {
		const response = await axios.post(
			'http://localhost:8080/api/pizzas/addpizza',
			{ pizza: pizza },
		);
		console.log(response);
		dispatch({ type: 'ADD_PIZZA_SUCCESS' });
	} catch (error) {
		dispatch({ type: 'ADD_PIZZA_FAILED', payload: error });
	}
};
