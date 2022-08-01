import {
	Alert,
	AlertIcon,
	Button,
	FormControl,
	FormLabel,
	Input,
	Spinner,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getToppingById, updateTopping } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Edittopping() {
	const { toppingid } = useParams();
	const dispatch = useDispatch();
	const gettoppingbyidstate = useSelector((state) => state.getToppingById);
	const { topping, error, loading } = gettoppingbyidstate;

	const updatetoppingstate = useSelector((state) => state.updateTopping);
	const { updatesuccess, updateloading, updateerror } = updatetoppingstate;
	const [toppingName, setToppingName] = useState('');
	const [toppingStock, setToppingStock] = useState();

	useEffect(() => {
		if (topping) {
			if (topping._id === toppingid) {
				setToppingName(topping.name);
				setToppingStock(topping.stock);
			} else {
				dispatch(getToppingById(toppingid));
			}
		} else {
			dispatch(getToppingById(toppingid));
		}
	}, [dispatch, topping, toppingid]);

	function formHandler(e) {
		e.preventDefault();
		const updatedTopping = {
			_id: toppingid,
			name: toppingName,
			stock: Number(toppingStock),
		};
		dispatch(updateTopping(updatedTopping));
	}

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Edit Topping
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

			{updateloading && (
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

			{updateerror && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{updatesuccess && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
				>
					<AlertIcon />
					Topping details edited successfully
				</Alert>
			)}
			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Topping Name
				</FormLabel>
				<Input
					value={toppingName}
					onChange={(e) => {
						setToppingName(e.target.value);
					}}
					placeholder='Topping Name'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Topping Stock
				</FormLabel>
				<Input
					value={toppingStock}
					onChange={(e) => {
						setToppingStock(e.target.value);
					}}
					placeholder='Topping Stock'
				/>
				<Button
					margin={2}
					backgroundColor='#b33030'
					width='200px'
					type='submit'
					color='white'
					onClick={formHandler}
				>
					{' '}
					EDIT TOPPING{' '}
				</Button>
			</FormControl>
		</>
	);
}
