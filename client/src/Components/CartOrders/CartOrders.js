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
export default function CartOrders({ item }) {
	return (
		<Box
			width='60%'
			display='flex'
			border='1px'
			borderColor='#b33030'
			borderRadius='25px'
			padding='10px'
		>
			<HStack>
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
						<Button size='small'>
							<Plus size={23} color='#37ce2c' />
						</Button>
						<b>{item.quantity}</b>
						<Button size='small'>
							<Minus size={23} color='#d11a2c' />
						</Button>
					</HStack>
				</VStack>
			</HStack>
			<Spacer />
			<HStack marginRight='30px'>
				<Image
					src={item.image}
					width='90px'
					height='90px'
					marginRight='10px'
				/>
				<Button size='small'>
					<Trash size={23} color='#d11a2c' />
				</Button>
			</HStack>
		</Box>
	);
}
