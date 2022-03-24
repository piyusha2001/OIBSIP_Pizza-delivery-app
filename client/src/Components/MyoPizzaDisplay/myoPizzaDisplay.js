import { Box, Flex, Image, VStack } from '@chakra-ui/react';
import React from 'react';

export default function myoPizzaDisplay() {
	return (
		<Flex justifyContent='center'>
			<VStack>
				<Box>
					<Image src='https://static.vecteezy.com/system/resources/thumbnails/000/364/628/small_2x/Chef_Avatar_Illustration-03.jpg'></Image>
				</Box>
			</VStack>
		</Flex>
	);
}
