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

//add base
export const addBaseReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_BASE_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'ADD_BASE_SUCCESS':
			return {
				loading: false,
				success: true,
			};
		case 'ADD_BASE_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getBaseByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_BASE_BY_ID_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_BASE_BY_ID_SUCCESS':
			return {
				loading: false,
				base: action.payload,
			};
		case 'GET_BASE_BY_ID_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export const updateBaseReducer = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_BASE_REQUEST':
			return {
				updateloading: true,
				...state,
			};
		case 'UPDATE_BASE_SUCCESS':
			return {
				updateloading: false,
				updatesuccess: true,
			};
		case 'UPDATE_BASE_FAILED':
			return {
				updateloading: false,
				updateerror: action.payload,
			};
		default:
			return state;
	}
};

//add topping
export const addToppingReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TOPPING_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'ADD_TOPPING_SUCCESS':
			return {
				loading: false,
				success: true,
			};
		case 'ADD_TOPPING_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

//get topping by id reducer
export const getToppingByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case 'GET_TOPPING_BY_ID_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_TOPPING_BY_ID_SUCCESS':
			return {
				loading: false,
				topping: action.payload,
			};
		case 'GET_TOPPING_BY_ID_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

//update topping reducer
export const updateToppingReducer = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_TOPPING_REQUEST':
			return {
				updateloading: true,
				...state,
			};
		case 'UPDATE_TOPPING_SUCCESS':
			return {
				updateloading: false,
				updatesuccess: true,
			};
		case 'UPDATE_TOPPING_FAILED':
			return {
				updateloading: false,
				updateerror: action.payload,
			};
		default:
			return state;
	}
};
