import { Text } from '@chakra-ui/react';
import React from 'react';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Toppingslist() {
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Toppings list
			</Text>
		</>
	);
}
