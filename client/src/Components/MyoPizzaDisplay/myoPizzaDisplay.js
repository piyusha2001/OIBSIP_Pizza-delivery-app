import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	Radio,
	RadioGroup,
	Spacer,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
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
	const [cheesee, setCheese] = useState('');
	const [tags, setTags] = useState([]);
	const [sauce, setSauce] = useState('');
	const [price, setPrice] = useState(0);
	const [basename, setBasename] = useState('');
	const [cartItem, setCartItem] = useState({
		name: 'Make your Own Pizza',
		image: '',
		description:
			JSON.stringify(tags) +
			' , ' +
			cheesee +
			' , ' +
			sauce +
			' ,' +
			basename,
		varient: '',
		quantity: 1,
		prices: 0,
		price: '',
	});

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
	}, [dispatch]);

	useEffect(() => {
		console.log(cartItem);
	}, [cartItem]);

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
						<HStack>
							<Text padding='10px' fontSize='2xl'>
								SIZE
							</Text>
							<Spacer />
							<Text padding='10px' fontSize='2xl'>
								PRICE:-{price}
							</Text>
						</HStack>
						<RadioGroup
							onChange={(value) => {
								const d = { ...cartItem };
								d.varient = value;
								if (value === 'small') {
									d.prices = 200;
								} else if (value === 'medium') {
									d.prices = 300;
								} else if (value === 'large') {
									d.prices = 400;
								}
								setPrice(d.prices);
								setCartItem(d);
							}}
						>
							<Stack direction='row'>
								<Radio value='small'>Small</Radio>
								<Radio value='medium'>Medium</Radio>
								<Radio value='large'>Large</Radio>
							</Stack>
						</RadioGroup>
						<Text padding='10px' fontSize='2xl'>
							Select one base :-
						</Text>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
							onChange={(value) => {
								setBasename(value);
							}}
						>
							{bases.map((base, index) => {
								return (
									<option value={base.name}>
										<text
											onClick={() => {
												const d = { ...cartItem };
												if (
													cartItem?.varient ===
													'small'
												) {
													d.prices =
														200 +
														base.prices[0][
															cartItem?.varient
														] *
															cartItem?.quantity;
												} else if (
													cartItem?.varient ===
													'medium'
												) {
													d.prices =
														300 +
														base.prices[0][
															cartItem?.varient
														] *
															cartItem?.quantity;
												} else if (
													cartItem?.varient ===
													'large'
												) {
													d.prices =
														400 +
														base.prices[0][
															cartItem?.varient
														] *
															cartItem?.quantity;
												}
												setPrice(d.prices);
												setCartItem(d);
											}}
										>
											{base.name} |{' '}
											{base.prices[0][cartItem?.varient]}
											/-
										</text>
									</option>
								);
							})}
						</Select>
						<Text padding='10px' fontSize='2xl'>
							Select any 3 toppings:-
						</Text>
						<Select
							onChange={(value) => setTags(value)}
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
							onChange={(value) => setSauce(value)}
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
							onChange={(value) => setCheese(value)}
						>
							{cheese.map((cheese) => {
								return (
									<option value={cheese.name}>
										{cheese.name}
									</option>
								);
							})}
						</Select>

						<Text padding='10px' fontSize='2xl'>
							Quantity:-
						</Text>
						<Select
							style={{ width: '100%' }}
							placeholder='Select option'
							onChange={(value) => {
								const d = { ...cartItem };
								d.quantity = value;
								let total = price * d.quantity;
								setPrice(total);
								d.prices = total;
								setCartItem(d);
							}}
						>
							{[...Array(10).keys()].map((x, i) => {
								return (
									<option key={i} value={i + 1}>
										{i + 1}
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
