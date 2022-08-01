import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartOrders from '../CartOrders/CartOrders';
import Checkout from '../Checkout/Checkout';
export default function CartDisplay() {
	const cartstate = useSelector((state) => state.cart);
	const cartItems = cartstate.cartItems;
	var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
	return (
		<Flex>
			<VStack width='100%'>
				<HStack width='100%' padding='0' marginTop='0px'>
					<VStack width='70%'>
						<Text padding='0px' fontSize='3xl' fontWeight='bold'>
							MY CART
						</Text>
						{cartItems.map((item) => {
							return <CartOrders item={item} />;
						})}
					</VStack>
					<VStack>
						<Text fontSize='3xl' fontWeight='bold'>
							SUBTOTAL:- {subtotal} /Rs
						</Text>
						<Checkout subtotal={subtotal} />
					</VStack>
				</HStack>
			</VStack>
		</Flex>
	);
}
