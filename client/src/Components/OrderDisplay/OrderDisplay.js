import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function OrderDisplay(order) {
	return (
		<Box
			width='60%'
			borderWidth='2px'
			border='solid'
			padding={3}
			borderRadius='25px'
			backgroundColor='#DFDFDE'
		>
			<HStack width='100%'>
				<Text
					fontSize={'2xl'}
					width='100%'
					fontWeight='bold'
					textAlign='center'
					color='#b33030'
				>
					Items
				</Text>
				<Text
					fontSize={'2xl'}
					width='100%'
					fontWeight='bold'
					textAlign='center'
					color='#b33030'
				>
					Address
				</Text>
				<Text
					fontSize={'2xl'}
					width='100%'
					fontWeight='bold'
					textAlign='center'
					color='#b33030'
				>
					Order Info
				</Text>
			</HStack>
			<hr />
			<HStack>
				<VStack width='100%' marginTop={0} textAlign='center'>
					{order.order.orderItems.map((item) => {
						return (
							<Text fontSize='1xl'>
								{item.name}[{item.varient}] * {item.quantity} =
								{item.price}
							</Text>
						);
					})}
				</VStack>
				<VStack width='100%' textAlign='center'>
					<Text fontSize='1xl'>{order.order.shippingAddress}</Text>
				</VStack>
				<VStack width='100%' paddingTop='50px' textAlign='center'>
					<Text fontSize='1xl'>
						Order Amount : {order.order.orderAmount}
					</Text>
					<Text fontSize='1xl'>
						Date : {order.order.createdAt.substring(0, 10)}
					</Text>
					<Text fontSize='1xl'>Order Id : {order.order.orderId}</Text>
					<Text fontSize='1xl'>
						Payment Id : {order.order.paymentId}
					</Text>
					<Text fontSize='1xl'>
						Order Status :{' '}
						<span>
							<Text
								color={
									order.order.isDelivered ? 'green' : 'red'
								}
							>
								{order.order.isDelivered ? (
									<Text fontWeight='semibold'>DELIVERED</Text>
								) : (
									<Text fontWeight='semibold'>
										NOT DELIVERED
									</Text>
								)}
								{order.order.isDelivered
									? localStorage.removeItem('cartItems')
									: null}
							</Text>
						</span>
					</Text>
				</VStack>
			</HStack>
		</Box>
	);
}
