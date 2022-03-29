import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import AdminScreen from './AdminScreen/AdminScreen';
import { useDispatch } from 'react-redux';
import { addPizza } from '../actions/pizzaActions';
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

	function formHandler(e, error) {
		e.preventDefault();
		const pizza = {
			name: name,
			image: image,
			description: description,
			category: category,
			prices: {
				small: smallPrice,
				medium: mediumPrice,
				large: largePrice,
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
