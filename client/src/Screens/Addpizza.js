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
import { addPizza } from '../actions/pizzaActions';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Addpizza() {
	const [name, setName] = useState('');
	const [smallPrice, setSmallPrice] = useState();
	const [largePrice, setLargePrice] = useState();
	//usestate for medium price
	const [mediumPrice, setMediumPrice] = useState();
	//usestate for description
	const [description, setDescription] = useState('');
	//for image
	const [image, setImage] = useState('');
	//category
	const [category, setCategory] = useState('');
	const dispatch = useDispatch();
	const addpizzastate = useSelector((state) => state.addPizza);

	const { success, error, loading } = addpizzastate;

	function formHandler(e) {
		e.preventDefault();
		const pizza = {
			name: name,
			image: image,
			description: description,
			category: category,
			prices: {
				small: Number(smallPrice),
				medium: Number(mediumPrice),
				large: Number(largePrice),
			},
		};
		console.log(pizza);
		dispatch(addPizza(pizza));
	}
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Add Pizza
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
					New pizza added successfully
				</Alert>
			)}

			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Pizza Name
				</FormLabel>
				<Input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder='Pizza Name'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Small Pizza Price
				</FormLabel>
				<Input
					value={smallPrice}
					onChange={(e) => {
						setSmallPrice(e.target.value);
					}}
					placeholder='Small size pizza price'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Medium Pizza Price{' '}
				</FormLabel>
				<Input
					value={mediumPrice}
					onChange={(e) => {
						setMediumPrice(e.target.value);
					}}
					placeholder='Medium size pizza price'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Large Pizza Price
				</FormLabel>
				<Input
					value={largePrice}
					onChange={(e) => {
						setLargePrice(e.target.value);
					}}
					placeholder='Large size pizza price'
				/>
				<FormLabel mt={2} htmlFor='description'>
					Description
				</FormLabel>
				<Input
					value={description}
					onChange={(e) => {
						setDescription(e.target.value);
					}}
					placeholder='Description'
				/>
				<FormLabel mt={2} htmlFor='category'>
					Category
				</FormLabel>
				<Input
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					placeholder='Category'
				/>
				<FormLabel mt={2} htmlFor='image'>
					Image URL
				</FormLabel>
				<Input
					value={image}
					onChange={(e) => {
						setImage(e.target.value);
					}}
					placeholder='Image URL'
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
					ADD PIZZA{' '}
				</Button>
			</FormControl>
		</>
	);
}
