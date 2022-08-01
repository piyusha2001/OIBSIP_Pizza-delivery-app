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
	getAllPizzas: getAllPizzasReducer,
	cart: cartReducer,
	getAllCheese: getAllCheeseReducer,
	getAllBases: getAllBasesReducer,
	getAllSauces: getAllSaucesReducer,
	getAllToppings: getAllToppingsReducer,
	placeOrder: placeOrderReducer,
	getUserOrders: getUserOrdersReducer,
	addPizza: addPizzaReducer,
	getPizzaById: getPizzaByIdReducer,
	updatePizza: updatePizzaReducer,
	getAllOrders: getAllOrdersReducer,
	deliverOrder: deliverOrderReducer,
	getAllUsers: getAllUsersReducer,
	addBase: addBaseReducer,
	getBaseById: getBaseByIdReducer,
	updateBase: updateBaseReducer,
	addTopping: addToppingReducer,
	getToppingById: getToppingByIdReducer,
	updateTopping: updateToppingReducer,
	setUserData: setUserDataReducer,
});

const cartItems = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const initialState = {
	cart: {
		cartItems,
	},
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;
