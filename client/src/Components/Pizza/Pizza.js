import { Box, Image, Select, Text } from '@chakra-ui/react';
import React from 'react';
export default function Pizza({ pizza }) {
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
						Sizes:{' '}
					</Text>
					<Select size='sm' placeholder='Select'>
						{pizza.varients.map((varient) => {
							return <option value={varient}>{varient}</option>;
						})}
					</Select>
					<Text fontSize='1xl' padding='5px'>
						Quantity:
					</Text>
					<Select size='sm' placeholder='Select '>
						{[...Array(10).keys()].map((x, i) => {
							return <option value={i + 1}>{i + 1}</option>;
						})}
					</Select>
				</Box>
			</Box>
		</Box>
	);
}
