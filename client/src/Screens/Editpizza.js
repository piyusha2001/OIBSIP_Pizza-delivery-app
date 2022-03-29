import React from 'react';
import { useParams } from 'react-router-dom';
import AdminScreen from './AdminScreen/AdminScreen';
export default function Editpizza() {
	const { pizzaid } = useParams();
	return (
		<>
			<AdminScreen />
			<h1>Editpizza</h1>
			<p>pizzaid: {pizzaid}</p>
		</>
	);
}
