import { Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../actions/orderAction';

export default function Checkout({ subtotal }) {
	const dispatch = useDispatch();
	return (
		<Button
			backgroundColor=' #b33030'
			color='white'
			width='100%'
			onClick={() => {
				dispatch(placeOrder(subtotal));
			}}
		>
			PAY NOW
		</Button>
	);
}
