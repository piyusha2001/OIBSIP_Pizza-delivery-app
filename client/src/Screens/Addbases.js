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
import { addBase } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Addbases() {
	const dispatch = useDispatch();
	const addbasestate = useSelector((state) => state.addBase);

	const { success, error, loading } = addbasestate;
	const [baseName, setBaseName] = useState('');
	const [smallBasePrice, setSmallBasePrice] = useState();
	const [largeBasePrice, setLargeBasePrice] = useState();
	const [mediumBasePrice, setMediumBasePrice] = useState();
	const [baseStock, setBaseStock] = useState('');

	function formHandler(e) {
		e.preventDefault();
		const base = {
			name: baseName,
			stock: Number(baseStock),
			prices: {
				small: Number(smallBasePrice),
				medium: Number(mediumBasePrice),
				large: Number(largeBasePrice),
			},
		};
		console.log(base);
		dispatch(addBase(base));
	}
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Add Base
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
					New base added successfully!
				</Alert>
			)}

			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Base Name
				</FormLabel>
				<Input
					value={baseName}
					onChange={(e) => {
						setBaseName(e.target.value);
					}}
					placeholder='Base Name'
				/>
				<FormLabel mt={2} htmlFor='stock'>
					Base Stock
				</FormLabel>
				<Input
					value={baseStock}
					onChange={(e) => {
						setBaseStock(e.target.value);
					}}
					placeholder='Base Stock'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Small Pizza Price
				</FormLabel>
				<Input
					value={smallBasePrice}
					onChange={(e) => {
						setSmallBasePrice(e.target.value);
					}}
					placeholder='Small base price'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Medium Pizza Price{' '}
				</FormLabel>
				<Input
					value={mediumBasePrice}
					onChange={(e) => {
						setMediumBasePrice(e.target.value);
					}}
					placeholder='Medium base price'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Large Pizza Price
				</FormLabel>
				<Input
					value={largeBasePrice}
					onChange={(e) => {
						setLargeBasePrice(e.target.value);
					}}
					placeholder='Large base price'
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
					ADD BASE{' '}
				</Button>
			</FormControl>
		</>
	);
}
