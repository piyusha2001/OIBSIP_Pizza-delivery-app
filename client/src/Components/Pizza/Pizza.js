import { Box, Button, Image, Select, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
export default function Pizza({ pizza }) {
	const [quantity, setQuantity] = useState(1);
	const [varient, setVarient] = useState('small');
	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
			<Text textAlign='center' fontSize='3xl'>
				{pizza.name}
			</Text>
			<Image
				src={pizza.image}
				width='200px'
				height='200px'
				marginLeft='80px'
			/>

			<Box p='6'>
				<Box display='flex' alignItems='baseline'>
					<Text fontSize='1xl' padding='5px'>
						Sizes:
					</Text>
					<Select
						value={varient}
						onChange={(e) => {
							setVarient(e.target.value);
						}}
						size='sm'
						placeholder='Select'
					>
						{pizza.varients.map((varient) => {
							return <option value={varient}>{varient}</option>;
						})}
					</Select>
					<Text fontSize='1xl' padding='5px'>
						Quantity:
					</Text>
					<Select
						size='sm'
						value={quantity}
						onChange={(e) => {
							setQuantity(e.target.value);
						}}
						placeholder='Select '
					>
						{[...Array(10).keys()].map((x, i) => {
							return <option value={i + 1}>{i + 1}</option>;
						})}
					</Select>
				</Box>
				<Box padding={1}>
					<Box display='flex' alignItems='baseline'>
						<Text fontSize='20px' width='50%'>
							Price: {pizza.prices[0][varient] * quantity}
						</Text>

						<Button
							isFullWidth='true'
							backgroundColor='#b33030'
							color='white'
						>
							ADD TO CART
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
