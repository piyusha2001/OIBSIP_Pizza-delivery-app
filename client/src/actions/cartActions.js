export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
	// console.log(pizza);
	console.log('Added2');
	var cartItem;
	if (pizza?.name === 'Make your Own Pizza') {
		cartItem = {
			name: pizza?.name,
			_id: pizza?._id,
			image: pizza?.image,
			description: pizza?.description,
			varient: varient,
			quantity: quantity,
			prices: pizza?.prices,
			price: pizza?.prices,
		};
	} else {
		cartItem = {
			name: pizza?.name,
			_id: pizza?._id,
			image: pizza?.image,
			description: pizza?.description,
			varient: varient,
			quantity: Number(quantity),
			prices: pizza?.prices,
			price: pizza?.prices[0][varient] * quantity,
		};
	}
	console.log(cartItem);
	if (cartItem.quantity > 10) {
		alert('You cannot add more than 10 quantities');
	} else {
		if (cartItem.quantity <= 0) {
			dispatch({
				type: 'DELETE_FROM_CART',
				payload: pizza,
			});
		} else {
			dispatch({ type: 'ADD_TO_CART', payload: cartItem });
			const cartItems = getState().cart.cartItems;
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
		}
	}
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
	dispatch({ type: 'DELETE_FROM_CART', payload: pizza });
	const cartItems = getState().cart.cartItems;
	localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
