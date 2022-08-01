import {
	Box,
	Button,
	Flex,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import Navbar from '../../Components/Navbar/Navbar';
import './styles.module.css';

const Main = () => {
	const textLines = ['MORE CHEESEE!!', 'MORE TOPPINGS!!', 'MORE FUNNN!!'];

	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;
	return (
		<>
			<Navbar />
			<Flex width='100%'>
				<VStack width='100%'>
					<HStack width='100%' backgroundColor='black'>
						<VStack width='100%' justifyContent='center'>
							<Text
								paddingBottom='20px'
								fontSize='3xl'
								color='white'
							>
								PIZZA PARADISE brings
							</Text>
							<Text
								textAlign='center'
								fontSize='3xl'
								color='white'
								width='100%'
							>
								Delicious and Hot Pizzas Just for You.
							</Text>
							<div
								style={{
									fontSize: '60px',
									fontFamily: 'Roboto Mono',
									color: 'white',
									padding: '10px',
								}}
							>
								<Typed
									strings={textLines}
									typeSpeed={80}
									loop
								/>
							</div>

							<Link
								to={
									user && user?.role === 'user'
										? '/home'
										: '/login'
								}
							>
								<Button
									margin={3}
									backgroundColor='#b33030'
									color='white'
									width='300PX'
									_hover={{ bg: '#FF8080' }}
								>
									ORDER NOW
								</Button>
							</Link>
						</VStack>

						<Image
							width='100%'
							src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg'
						/>
					</HStack>
					<HStack
						margin={0}
						width='100%'
						backgroundColor='#dee2e6'
						textAlign='center'
					>
						<Image
							width='600'
							height='400'
							src='https://images.themodernproper.com/billowy-turkey/production/posts/Thai-Style-Pizza-1.jpg?w=5472&auto=compress%2Cformat&fit=crop&dm=1599766869&s=36d69be04f0d27def532c2c33622c2d8'
						/>
						<Text
							fontSize='3xl'
							width='100%'
							textAlign='center'
							fontWeight='semibold'
						>
							You can also make your own pizza! Tell us what you
							want and we will make it for you ! Your choice of
							base, toppings, cheese and much more things.
						</Text>
					</HStack>
					<VStack
						width='100%'
						backgroundColor='#b33030'
						padding='30px'
					>
						<Text
							fontSize='3xl'
							fontWeight='bold'
							color='white'
							padding='20px'
						>
							OUR TOP PRIORITIES
						</Text>
						<SimpleGrid columns={3} spacing={10}>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/512/3035/3035083.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										100% Hygiene
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons.flaticon.com/png/128/2153/premium/2153786.png?token=exp=1648453407~hmac=35a2a3ee71a54a962ee78b7b70a87080'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Fresh Vegetables
									</Text>
								</HStack>
							</Box>

							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons.flaticon.com/png/128/3514/premium/3514378.png?token=exp=1648453447~hmac=28e97ed843f7e7bcb58b3043eb9b3de3'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Fresh meat
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Fast Delivery
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/128/1684/1684426.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Hot served
									</Text>
								</HStack>
							</Box>
							<Box
								bg='white'
								height='80px'
								width='300px'
								padding='13px'
								borderWidth='3px'
								borderColor='black'
								borderRadius='25px'
							>
								<HStack>
									<Image
										marginRight='20px'
										alignItems='flex-end'
										borderRadius='0px'
										width='50px'
										src='https://cdn-icons-png.flaticon.com/512/2651/2651001.png'
									/>
									<Text
										textAlign='center'
										fontWeight='semibold'
										fontSize='2xl'
									>
										Your Happiness
									</Text>
								</HStack>
							</Box>
						</SimpleGrid>
					</VStack>
					<VStack backgroundColor='#dee2e6' width='100%'>
						<Text>@Copyright2022</Text>
					</VStack>
				</VStack>
			</Flex>
		</>

		// <Flex width='100%'>
		// 	<VStack width='100%'>
		// 		<HStack width='100%'>
		// 			<nav className={styles.navbar}>
		// 				<h1 style={{ color: 'black' }}>SAY CHEESE!</h1>
		// 				<div>
		// 					{user ? (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={handleLogout}
		// 						>
		// 							Logout
		// 						</button>
		// 					) : (
		// 						<button
		// 							className={styles.white_btn}
		// 							onClick={() => {
		// 								navigate('/login');
		// 							}}
		// 						>
		// 							Login
		// 						</button>
		// 					)}
		// 				</div>
		// 			</nav>
		// 		</HStack>
		// 	</VStack>
		// </Flex>
	);
};

export default Main;
