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

	const pizzastate = useSelector((state) => state.getAllPizzas);

	const { pizzas, error, loading } = pizzastate;

	useEffect(() => {
		dispatch(getAllPizzas());
	}, [dispatch]);
	return (
		<Flex
			display='flex'
			flexDirection={'column'}
			alignItems='center'
			justifyContent='center'
			width='full'
		>
			{loading ? (
				<h1>Loading</h1>
			) : error ? (
				<h1>Something went wrong</h1>
			) : (
				<>
					<SimpleGrid
						columns={[1, 1, 2, 3]}
						width='full'
						margin={5}
						alignItems={'center'}
						justifyContent={'center'}
						spacing={[5, 5, 10, 10]}
					>
						{pizzas.map((pizza) => {
							return (
								<Flex
									width={'full'}
									alignItems={'center'}
									justifyContent='center'
								>
									<Pizza key={pizza._id} pizza={pizza} />
								</Flex>
							);
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
									width='300px'
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
		</Flex>
	);
}
