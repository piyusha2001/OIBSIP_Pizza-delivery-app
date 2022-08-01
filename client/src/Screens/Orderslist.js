import {
	Alert,
	AlertIcon,
	Button,
	Spinner,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../actions/orderAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Orderslist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllOrders());
	}, [dispatch]);
	const orderstate = useSelector((state) => state.getAllOrders);

	const { orders, error, loading } = orderstate;

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Orders list
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

			<TableContainer width='75%' margin='auto'>
				<Table variant='striped' colorScheme='gray' borderWidth='2px'>
					<TableCaption>Orders List</TableCaption>
					<Thead>
						<Tr>
							<Th>Order Id</Th>
							<Th>Email</Th>
							<Th>User Id</Th>
							<Th>Amount</Th>
							<Th>Date</Th>
							<Th>Status</Th>
						</Tr>
					</Thead>
					<Tbody>
						{orders.map((order) => (
							<Tr key={order._id}>
								<Td>{order._id}</Td>
								<Td>{order.email}</Td>
								<Td>{order.userid}</Td>
								<Td>{order.orderAmount}</Td>
								<Td>{order.createdAt.substring(0, 10)}</Td>
								<Td>
									{order.isDelivered ? (
										<Text
											fontWeight={'semibold'}
											color='green.500'
										>
											Delivered
										</Text>
									) : (
										<Button
											backgroundColor='#b33030'
											color='white'
											onClick={() => {
												dispatch(
													deliverOrder(order._id),
												);
											}}
										>
											Deliver
										</Button>
									)}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}
