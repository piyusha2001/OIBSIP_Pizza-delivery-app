import { Flex, HStack, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
const Main = () => {
	let navigate = useNavigate();
	const user = localStorage.getItem('token');
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<Flex width='100%'>
			<VStack width='100%'>
				<HStack width='100%'>
					<nav className={styles.navbar}>
						<h1 style={{ color: 'black' }}>SAY CHEESE!</h1>
						<div>
							{user ? (
								<button
									className={styles.white_btn}
									onClick={handleLogout}
								>
									Logout
								</button>
							) : (
								<button
									className={styles.white_btn}
									onClick={() => {
										navigate('/login');
									}}
								>
									Login
								</button>
							)}
						</div>
					</nav>
				</HStack>
			</VStack>
		</Flex>
	);
};

export default Main;
