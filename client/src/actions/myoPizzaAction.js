import axios from 'axios';

export const getAllBases = () => async (dispatch) => {
	dispatch({ type: 'GET_BASES_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getallbases',
	);
	// console.log(response);
	dispatch({ type: 'GET_BASES_SUCCESS', payload: response.data });
};

export const getAllSauces = () => async (dispatch) => {
	dispatch({ type: 'GET_SAUCES_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getallsauces',
	);
	// console.log(response);
	dispatch({ type: 'GET_SAUCES_SUCCESS', payload: response.data });
};

export const getAllToppings = () => async (dispatch) => {
	dispatch({ type: 'GET_TOPPINGS_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getalltoppings',
	);
	// console.log(response);
	dispatch({ type: 'GET_TOPPINGS_SUCCESS', payload: response.data });
};

export const getAllCheese = () => async (dispatch) => {
	dispatch({ type: 'GET_CHEESE_REQUEST' });

	const response = await axios.get(
		'http://localhost:8080/api/myopizza/getallcheese',
	);
	// console.log(response);
	dispatch({ type: 'GET_CHEESE_SUCCESS', payload: response.data });
};
