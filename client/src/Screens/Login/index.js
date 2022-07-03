import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Login = () => {
	const [data, setData] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'https://pizza-app-backend12.herokuapp.com/api/auth';
			const res = await axios.post(url, data);
			localStorage.setItem('token', res?.data?.data);
			if (res?.data?.user?.role === 'admin') {
				window.location.href = '/admin';
			} else {
				window.location.href = '/';
			}
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form
						className={styles.form_container}
						onSubmit={handleSubmit}
					>
						<h1>Login to Your Account</h1>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<Link
							to='/forgot-password'
							style={{ alignSelf: 'flex-start' }}
						>
							<p style={{ padding: '0 15px' }}>
								Forgot Password?
							</p>
						</Link>
						{error && (
							<div className={styles.error_msg}>{error}</div>
						)}
						<button type='submit' className={styles.red_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to='/signup'>
						<button type='button' className={styles.white_btn}>
							Sign Up!
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
