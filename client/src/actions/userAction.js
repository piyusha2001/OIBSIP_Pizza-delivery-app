import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_USERS_REQUEST' });

	try {
		const response = await axios.get(
			'https://pizza-app-backend12.herokuapp.com/api/users/getallusers',
		);
		console.log(response);
		dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_USERS_FAILED', payload: error });
	}
};

export const setUserData = (userData) => (dispatch) => {
	dispatch({ type: 'SET_USER_DATA', payload: userData });
};
