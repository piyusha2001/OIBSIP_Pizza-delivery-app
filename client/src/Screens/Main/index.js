import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './styles.module.css';

const Main = () => {
	// let navigate = useNavigate();
	// const user = localStorage.getItem('token');
	// const handleLogout = () => {
	// 	localStorage.removeItem('token');
	// 	window.location.reload();
	// };

	return (
		<>
			<Navbar />
			<Flex justifyContent='center'>
				<Link to='/home'>
					<Button margin={3} backgroundColor='#b33030' color='white'>
						ORDER NOW
					</Button>
				</Link>
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
