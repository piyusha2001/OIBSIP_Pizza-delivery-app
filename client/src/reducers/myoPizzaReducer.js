export const getAllBasesReducer = (state = { bases: [] }, action) => {
	switch (action.type) {
		case 'GET_BASES_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_BASES_SUCCESS':
			return {
				loading: false,
				bases: action.payload,
			};
		case 'GET_BASES_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const getAllSaucesReducer = (state = { sauces: [] }, action) => {
	switch (action.type) {
		case 'GET_SAUCES_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_SAUCES_SUCCESS':
			return {
				loading: false,
				pizzas: action.payload,
			};
		case 'GET_SAUCES_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const getAllToppingsReducer = (state = { toppings: [] }, action) => {
	switch (action.type) {
		case 'GET_TOPPINGS_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_TOPPINGS_SUCCESS':
			return {
				loading: false,
				pizzas: action.payload,
			};
		case 'GET_TOPPINGS_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const getAllCheeseReducer = (state = { cheese: [] }, action) => {
	switch (action.type) {
		case 'GET_CHEESE_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_CHEESE_SUCCESS':
			return {
				loading: false,
				pizzas: action.payload,
			};
		case 'GET_CHEESE_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
