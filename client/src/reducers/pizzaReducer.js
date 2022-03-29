export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
	switch (action.type) {
		case 'GET_PIZZAS_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_PIZZAS_SUCCESS':
			return {
				loading: false,
				pizzas: action.payload,
			};
		case 'GET_PIZZAS_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const addPizzaReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'ADD_PIZZA_SUCCESS':
			return {
				loading: false,
				success: true,
			};
		case 'ADD_PIZZA_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

//get pizza by id reducer
export const getPizzaByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_PIZZA_BY_ID_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_PIZZA_BY_ID_SUCCESS':
			return {
				loading: false,
				pizza: action.payload,
			};
		case 'GET_PIZZA_BY_ID_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
//update pizza reducer
export const updatePizzaReducer = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_PIZZA_REQUEST':
			return {
				updateloading: true,
				...state,
			};
		case 'UPDATE_PIZZA_SUCCESS':
			return {
				updateloading: false,
				updatesuccess: true,
			};
		case 'UPDATE_PIZZA_FAILED':
			return {
				updateloading: false,
				updateerror: action.payload,
			};
		default:
			return state;
	}
};
