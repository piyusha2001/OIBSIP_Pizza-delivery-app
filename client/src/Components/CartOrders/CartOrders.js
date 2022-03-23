import {
	Box,
	Button,
	HStack,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Minus, Plus, Trash } from 'phosphor-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../../actions/cartActions';
export default function CartOrders({ item }) {
	const dispatch = useDispatch();
	return (
		<Box
			width='60%'
			display='flex'
			border='1px'
			borderColor='#b33030'
			borderRadius='25px'
			padding='27px'
			marginRight='10px'
		>
			<VStack alignItems='flex-start'>
				<HStack>
					<Text fontSize='2xl'>{item.name}</Text>
					<Text fontSize='1xl'>[{item.varient}]</Text>
				</HStack>
				<Text fontSize='1xl'>
					Price : {item.quantity}*{item.prices[0][item.varient]} =
					{item.price}
				</Text>
				<HStack>
					<Text fontSize='1xl'>Quantity :</Text>
					<Button
						onClick={() => {
							dispatch(
								addToCart(
									item,
									item.quantity + 1,
									item.varient,
								),
							);
						}}
						size='small'
					>
						<Plus size={23} color='#37ce2c' />
					</Button>
					<b>{item.quantity}</b>
					<Button
						onClick={() => {
							dispatch(
								addToCart(
									item,
									item.quantity - 1,
									item.varient,
								),
							);
						}}
						size='small'
					>
						<Minus size={23} color='#d11a2c' />
					</Button>
				</HStack>
				<Text fontSize='1xl'>Description : {item.description}</Text>
			</VStack>

			<Spacer />
			<HStack marginRight='30px'>
				<Image
					src={item.image}
					width='90px'
					height='90px'
					marginRight='10px'
				/>
				<Button
					onClick={() => {
						dispatch(deleteFromCart(item));
					}}
					size='small'
				>
					<Trash size={23} color='#d11a2c' />
				</Button>
			</HStack>
		</Box>
	);
}
