import { Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Edittopping() {
	const { toppingid } = useParams();
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Edit Topping
			</Text>
		</>
	);
}
