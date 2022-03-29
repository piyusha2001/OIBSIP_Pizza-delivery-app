import React from 'react';
import { useParams } from 'react-router-dom';

export default function Editbase() {
	const { baseid } = useParams();
	return <div>{baseid}</div>;
}
