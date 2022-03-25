import { Button, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Pizza as PizzaIcon } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPizzas } from '../../actions/pizzaActions';
import Pizza from '../Pizza/Pizza';
import './styles.css';
export default function PizzaDisplay() {
	const dispatch = useDispatch();

	const pizzastate = useSelector((state) => state.getAllPizzasReducer);

	const { pizzas, error, loading } = pizzastate;

	useEffect(() => {
		dispatch(getAllPizzas());
	}, [dispatch]);
	return (
		<div>
			{loading ? (
				<h1>Loading</h1>
			) : error ? (
				<h1>Something went wrong</h1>
			) : (
				<>
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
					<Flex
						width='100%'
						backgroundColor='#b33030'
						padding='20px'
						justifyContent='center'
					>
						<VStack>
							<Text
								fontSize='3xl'
								textAlign='center'
								color='white'
							>
								Want to make your own pizza??
							</Text>
							<Link to='/myopizza'>
								<Button
									color='#b33030'
									padding='10px'
									height='70px'
									width='200px'
									fontSize='20px'
								>
									Click here
									<PizzaIcon size={32} color='#b33030' />
								</Button>
							</Link>
						</VStack>
					</Flex>
				</>
			)}
		</div>
	);
}
