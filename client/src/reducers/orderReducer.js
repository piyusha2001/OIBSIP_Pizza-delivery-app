export const placeOrderReducer = (state = {}, action) => {
	switch (action.type) {
		case 'PLACE_ORDER_REQUEST':
			return {
				loading: true,
			};
		case 'ORDER_CREATED_SUCCESS':
			return {
				loading: true,
				success: false,
			};
		case 'PLACE_ORDER_LOADING':
			return {
				loading: true,
				success: false,
			};
		case 'ORDER_VERIFY_SUCCESS':
			return {
				loading: false,
				success: true,
			};
		case 'PLACE_ORDER_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'GET_USER_ORDERS_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_USER_ORDERS_SUCCESS':
			return {
				loading: false,
				orders: action.payload,
			};
		case 'GET_USER_ORDERS_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getAllOrdersReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'GET_ALL_ORDERS_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_ALL_ORDERS_SUCCESS':
			return {
				loading: false,
				orders: action.payload,
			};
		case 'GET_ALL_ORDERS_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

//deliver order reducer
export const deliverOrderReducer = (state = { orders: [] }, action) => {
	switch (action.type) {
		case 'DELIVER_ORDER_REQUEST':
			return {
				loading: true,
			};
		case 'DELIVER_ORDER_SUCCESS':
			return {
				loading: false,
				orders: action.payload,
			};
		case 'DELIVER_ORDER_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
