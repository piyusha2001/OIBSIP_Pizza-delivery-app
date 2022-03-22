import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartOrders from '../CartOrders/CartOrders';
export default function CartDisplay() {
	const cartstate = useSelector((state) => state.cartReducer);
	const cartItems = cartstate.cartItems;
	return (
		<Flex width='100%'>
			<VStack width='100%'>
				<HStack width='100%'>
					<VStack width='60%'>
						<Text padding='10px' fontSize='3xl' fontWeight='bold'>
							MY CART
						</Text>
						{cartItems.map((item) => {
							return <CartOrders item={item} />;
						})}
					</VStack>
					<Box width='40%' h='40px' bg='tomato'>
						2
					</Box>
				</HStack>
			</VStack>
		</Flex>
	);
}
