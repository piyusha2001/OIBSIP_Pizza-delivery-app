import {
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
import { Pencil, Trash } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTopping, getAllToppings } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Toppingslist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllToppings());
	}, [dispatch]);
	const toppingstate = useSelector((state) => state.getAllToppings);

	const { toppings, loading } = toppingstate;
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Toppings list
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
			<TableContainer width='75%' margin='auto'>
				<Table variant='striped' colorScheme='gray' borderWidth='2px'>
					<TableCaption>Toppings List</TableCaption>
					<Thead>
						<Tr>
							<Th>Topping name</Th>
							<Th>Stock</Th>

							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{toppings.map((topping) => (
							<Tr key={topping._id}>
								<Td>{topping.name}</Td>
								<Td>{topping.stock}</Td>
								<Td>
									<Trash
										onClick={() => {
											dispatch(
												deleteTopping(topping._id),
											);
										}}
										size={22}
										color='#bc2037'
									/>
									<Link
										to={`/admin/edittopping/${topping._id}`}
									>
										<Pencil size={22} color='#19e672' />
									</Link>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
}
