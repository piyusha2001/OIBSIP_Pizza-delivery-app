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
import { getPizzaById, updatePizza } from '../actions/pizzaActions';
import AdminScreen from './AdminScreen/AdminScreen';
export default function Editpizza() {
	const { pizzaid } = useParams();
	const dispatch = useDispatch();
	const updatepizzastate = useSelector((state) => state.updatePizza);
	const getpizzabyidstate = useSelector((state) => state.getPizzaById);
	const { pizza, error, loading } = getpizzabyidstate;
	const { updatesuccess, updateloading, updateerror } = updatepizzastate;
	useEffect(() => {
		if (pizza) {
			if (pizza._id === pizzaid) {
				setName(pizza.name);
				setSmallPrice(pizza.prices[0]['small']);
				setMediumPrice(pizza.prices[0]['medium']);
				setLargePrice(pizza.prices[0]['large']);
				setDescription(pizza.description);
				setImage(pizza.image);
				setCategory(pizza.category);
			} else {
				dispatch(getPizzaById(pizzaid));
			}
		} else {
			dispatch(getPizzaById(pizzaid));
		}
	}, [dispatch, pizza, pizzaid]);

	function formHandler(e) {
		e.preventDefault();
		const updatedPizza = {
			_id: pizzaid,
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
		dispatch(updatePizza(updatedPizza));
		// dispatch(addPizza(pizza));
	}

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

	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Edit Pizza
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
					Pizza details edited successfully
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
					UPDATE PIZZA{' '}
				</Button>
			</FormControl>
		</>
	);
}
