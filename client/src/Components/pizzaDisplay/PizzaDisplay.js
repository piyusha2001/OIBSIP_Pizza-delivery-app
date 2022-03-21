import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../../actions/pizzaActions';
import Pizza from '../Pizza/Pizza';
import './styles.css';
export default function PizzaDisplay() {
	const dispatch = useDispatch();

	const pizzastate = useSelector((state) => state.getAllPizzasReducer);

	const { pizzas, error, loading } = pizzastate;

	useEffect(() => {
		dispatch(getAllPizzas());
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading</h1>
			) : error ? (
				<h1>Something went wrong</h1>
			) : (
				<SimpleGrid
					columns={3}
					margin='50px '
					spacing={6}
					marginLeft='100px'
					minChildWidth='410px'
				>
					{pizzas.map((pizza) => {
						return <Pizza key={pizza._id} pizza={pizza} />;
					})}
				</SimpleGrid>
			)}
		</div>
	);
}
