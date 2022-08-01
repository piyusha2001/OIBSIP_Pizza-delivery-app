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
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import {
	getAllBases,
	getAllCheese,
	getAllSauces,
	getAllToppings,
} from '../../actions/myoPizzaAction';

export default function MyoPizzaDisplay() {
	const { Option } = Select;
	const dispatch = useDispatch();
	const basestate = useSelector((state) => state.getAllBases);
	const saucestate = useSelector((state) => state.getAllSauces);
	const toppingstate = useSelector((state) => state.getAllToppings);
	const cheesestate = useSelector((state) => state.getAllCheese);
	const [cheesee, setCheese] = useState('');
	const [tags, setTags] = useState([]);
	const [sauce, setSauce] = useState('');
	const [price, setPrice] = useState(0);
	const [basename, setBasename] = useState('');
	const [cartItem, setCartItem] = useState({
		name: 'Make your Own Pizza',
		_id: '',
		image: 'https://cdn.pixabay.com/photo/2012/04/01/16/39/chefs-hat-23436__340.png',
		description: '',
		varient: '',
		quantity: 1,
		prices: 0,
		// price: '',
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
								PRICE:-{cartItem?.prices}
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
								console.log(value);
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
												// d.price = base.prices;
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
							onChange={(value) => {
								if (value?.length > 3) {
									alert('Cannot select more than 3 toppings');
								} else {
									setTags(value);
								}
							}}
							value={tags}
							maxTagCount={3}
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
								let total = price * value;
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
							onClick={() => {
								const d = { ...cartItem };
								d.description = `${basename}, ${tags
									.join(' , ')
									.toString()} , ${sauce}, ${cheesee}`;
								console.log(d.description);
								d._id = nanoid(24);
								setCartItem(d);
								console.log(cartItem);
								dispatch(addToCart(d, d.quantity, d.varient));
								console.log('Added');
							}}
						>
							Add to Cart
						</Button>
					</Box>
				</Box>
			</VStack>
		</Flex>
	);
}
