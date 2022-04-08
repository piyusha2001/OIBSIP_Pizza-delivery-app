import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import {
	addBaseReducer,
	addToppingReducer,
	getAllBasesReducer,
	getAllCheeseReducer,
	getAllSaucesReducer,
	getAllToppingsReducer,
	getBaseByIdReducer,
	getToppingByIdReducer,
	updateBaseReducer,
	updateToppingReducer,
} from './reducers/myoPizzaReducer';
import {
	deliverOrderReducer,
	getAllOrdersReducer,
	getUserOrdersReducer,
	placeOrderReducer,
} from './reducers/orderReducer';
import {
	addPizzaReducer,
	getAllPizzasReducer,
	getPizzaByIdReducer,
	updatePizzaReducer,
} from './reducers/pizzaReducer';
import {
	getAllUsersReducer,
	setUserDataReducer,
} from './reducers/UsersReducer';

const finalReducer = combineReducers({
	getAllPizzasReducer: getAllPizzasReducer,
	cartReducer: cartReducer,
	getAllCheeseReducer: getAllCheeseReducer,
	getAllBasesReducer: getAllBasesReducer,
	getAllSaucesReducer: getAllSaucesReducer,
	getAllToppingsReducer: getAllToppingsReducer,
	placeOrderReducer: placeOrderReducer,
	getUserOrdersReducer: getUserOrdersReducer,
	addPizzaReducer: addPizzaReducer,
	getPizzaByIdReducer: getPizzaByIdReducer,
	updatePizzaReducer: updatePizzaReducer,
	getAllOrdersReducer: getAllOrdersReducer,
	deliverOrderReducer: deliverOrderReducer,
	getAllUsersReducer: getAllUsersReducer,
	addBaseReducer: addBaseReducer,
	getBaseByIdReducer: getBaseByIdReducer,
	updateBaseReducer: updateBaseReducer,
	addToppingReducer: addToppingReducer,
	getToppingByIdReducer: getToppingByIdReducer,
	updateToppingReducer: updateToppingReducer,
	setUserDataReducer: setUserDataReducer,
});

const cartItems = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const initialState = {
	cartReducer: {
		cartItems: cartItems,
	},
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;
