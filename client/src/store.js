import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import {
	getAllBasesReducer,
	getAllCheeseReducer,
	getAllSaucesReducer,
	getAllToppingsReducer,
} from './reducers/myoPizzaReducer';
import {
	getUserOrdersReducer,
	placeOrderReducer,
} from './reducers/orderReducer';
import {
	addPizzaReducer,
	getAllPizzasReducer,
	getPizzaByIdReducer,
	updatePizzaReducer,
} from './reducers/pizzaReducer';

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
