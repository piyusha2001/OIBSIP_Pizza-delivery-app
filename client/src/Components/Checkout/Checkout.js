import { Alert, AlertIcon, Button, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../actions/orderAction';

export default function Checkout({ subtotal }) {
	const orderstate = useSelector((state) => state.placeOrderReducer);
	const { loading, error, success } = orderstate;
	const dispatch = useDispatch();
	return (
		<>
			{loading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{error && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{success && (
				<Alert status='success'>
					<AlertIcon />
					Payment Done ! Order Placed Successfully
				</Alert>
			)}

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
		</>
	);
}
