export const getAllBasesReducer = (state = { bases: [] }, action) => {
	switch (action.type) {
		case 'GET_BASES_SUCCESS':
			return {
				loading: false,
				bases: action.payload,
			};

		default:
			return state;
	}
};
export const getAllSaucesReducer = (state = { sauces: [] }, action) => {
	switch (action.type) {
		case 'GET_SAUCES_SUCCESS':
			return {
				loading: false,
				sauces: action.payload,
			};

		default:
			return state;
	}
};
export const getAllToppingsReducer = (state = { toppings: [] }, action) => {
	switch (action.type) {
		case 'GET_TOPPINGS_SUCCESS':
			return {
				loading: false,
				toppings: action.payload,
			};

		default:
			return state;
	}
};
export const getAllCheeseReducer = (state = { cheese: [] }, action) => {
	switch (action.type) {
		case 'GET_CHEESE_SUCCESS':
			return {
				loading: false,
				cheese: action.payload,
			};

		default:
			return state;
	}
};
