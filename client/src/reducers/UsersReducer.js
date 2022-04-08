export const getAllUsersReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case 'GET_ALL_USERS_REQUEST':
			return {
				loading: true,
				...state,
			};
		case 'GET_ALL_USERS_SUCCESS':
			return {
				loading: false,
				users: action.payload,
			};
		case 'GET_ALL_USERS_FAILED':
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

// setUserData from actions/userAction.js
export const setUserDataReducer = (state = { userData: [] }, action) => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return {
				userData: action.payload,
			};
		default:
			return state;
	}
};
