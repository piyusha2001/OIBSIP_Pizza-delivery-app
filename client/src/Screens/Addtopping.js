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
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTopping } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Addtopping() {
	const dispatch = useDispatch();
	const [toppingName, setToppingName] = useState('');
	const [toppingStock, setToppingStock] = useState();
	const addToppingState = useSelector((state) => state.addTopping);
	const { success, error, loading } = addToppingState;

	function formHandler(e) {
		e.preventDefault();
		const topping = {
			name: toppingName,
			stock: toppingStock,
		};
		console.log(topping);
		dispatch(addTopping(topping));
	}

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Add Topping
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

			{success && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
					textAlign='center'
				>
					<AlertIcon />
					New Topping added successfully
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
					ADD TOPPING{' '}
				</Button>
			</FormControl>
		</>
	);
}
