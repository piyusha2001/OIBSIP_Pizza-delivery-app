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
import { deleteBase, getAllBases } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Baseslist() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllBases());
	}, [dispatch]);
	const basestate = useSelector((state) => state.getAllBases);

	const { bases, loading } = basestate;
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Bases list
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
					<TableCaption>Bases List</TableCaption>
					<Thead>
						<Tr>
							<Th>Base name</Th>
							<Th>Stock</Th>
							<Th>Price</Th>
							<Th>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{bases.map((base) => (
							<Tr key={base._id}>
								<Td>{base.name}</Td>
								<Td>{base.stock}</Td>
								<Td isNumeric='false'>
									Small : {base.prices[0]['small']}
									<br />
									Medium : {base.prices[0]['medium']}
									<br />
									Large : {base.prices[0]['large']}
								</Td>

								<Td>
									<Trash
										size={22}
										onClick={() => {
											dispatch(deleteBase(base._id));
										}}
										color='#bc2037'
									/>
									<Link to={`/admin/editbase/${base._id}`}>
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
