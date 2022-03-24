import {
	Box,
	Button,
	Flex,
	Image,
	Radio,
	RadioGroup,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Select } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getAllBases,
	getAllCheese,
	getAllSauces,
	getAllToppings,
} from '../../actions/myoPizzaAction';

export default function MyoPizzaDisplay() {
	const { Option } = Select;
	const dispatch = useDispatch();
	const basestate = useSelector((state) => state.getAllBasesReducer);
	const saucestate = useSelector((state) => state.getAllSaucesReducer);
	const toppingstate = useSelector((state) => state.getAllToppingsReducer);
	const cheesestate = useSelector((state) => state.getAllCheeseReducer);

	const { bases } = basestate;
	const { sauces } = saucestate;
	const { toppings } = toppingstate;
	const { cheese } = cheesestate;

	const children = [];
	children.push(
		toppings.map((topping) => {
			return <Option value={topping.name}>{topping.name}</Option>;
		}),
	);

	useEffect(() => {
		dispatch(getAllBases());
		dispatch(getAllToppings());
		dispatch(getAllSauces());
		dispatch(getAllCheese());
	}, []);
	return (
		<Flex justifyContent='center'>
			<VStack margin={5}>
				<Box
					borderRadius='25px'
					borderWidth='3px'
					borderColor='#b33030'
					padding='10px'
				>
					<Image
						src='https://www.crustys.com/wp-content/uploads/2019/01/make_your_own_pizza.jpg'
						borderTopRadius='25px'
					></Image>
					<Box padding='5px'>
						<Text fontSize='3xl' textAlign='center'>
							Create your own Pizza!!
						</Text>
						<Text padding='10px' fontSize='2xl'>
							SIZE
						</Text>
						<RadioGroup>
							<Stack direction='row'>
								<Radio value='1'>Small</Radio>
								<Radio value='2'>Medium</Radio>
								<Radio value='3'>Large</Radio>
							</Stack>
						</RadioGroup>
						<Text padding='10px' fontSize='2xl'>
							Select one base :-
						</Text>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
						>
							{bases.map((base) => {
								return (
									<option value={base.name}>
										{base.name}
									</option>
								);
							})}
						</Select>
						<Text padding='10px' fontSize='2xl'>
							Select any 3 toppings:-
						</Text>
						<Select
							mode='tags'
							style={{ width: '100%' }}
							placeholder='Tags Mode'
						>
							{children}
						</Select>
						<Text padding='10px' fontSize='2xl'>
							Select sauce of your choice :-
						</Text>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
						>
							{sauces.map((sauce) => {
								return (
									<option value={sauce.name}>
										{sauce.name}
									</option>
								);
							})}
						</Select>
						<Text padding='10px' fontSize='2xl'>
							Select cheese of your choice:-
						</Text>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
						>
							{cheese.map((cheese) => {
								return (
									<option value={cheese.name}>
										{cheese.name}
									</option>
								);
							})}
						</Select>

						<Button
							marginTop='15px'
							width='25%'
							backgroundColor=' #b33030'
							color='white'
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</VStack>
		</Flex>
	);
}
