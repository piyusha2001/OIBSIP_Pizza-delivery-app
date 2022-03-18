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
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Pizza App</h1>
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
		</div>
	);
};

export default Main;
