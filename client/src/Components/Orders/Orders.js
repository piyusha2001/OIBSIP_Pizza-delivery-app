import {
	Alert,
	AlertIcon,
	Flex,
	Spinner,
	Text,
	VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../actions/orderAction';
import OrderDisplay from '../OrderDisplay/OrderDisplay';

export default function Orders() {
	const dispatch = useDispatch();
	const orderstate = useSelector((state) => state.getUserOrders);
	const { loading, error, orders } = orderstate;

	useEffect(() => {
		dispatch(getUserOrders());
	}, [dispatch]);
	return (
		<Flex width='100%'>
			<VStack width='100%'>
				<Text
					textAlign='center'
					fontSize={'3xl'}
					fontWeight='bold'
					padding='20px'
				>
					My Orders
				</Text>
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
				{orders &&
					orders.map((order) => <OrderDisplay order={order} />)}
			</VStack>
		</Flex>
	);
}
