import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import success from '../../images/success.png';
import styles from './styles.module.css';

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const { id, token } = useParams();

	useEffect(() => {
		return async () => {
			if (id && token) {
				const url = `https://pizza-app-backend12.herokuapp.com/api/users/${id}/verify/${token}`;
				const { data } = await axios.get(url);
				if (data?.success) {
					alert(data?.message);
					setValidUrl(true);
				} else {
					setValidUrl(false);
				}
			}
		};
	}, [id, token]);

	return (
		<Fragment>
			{validUrl ? (
				<div className={styles.container}>
					<img
						src={success}
						alt='success_img'
						className={styles.success_img}
					/>
					<h1>Email verified successfully</h1>
					<Link to='/login'>
						<button className={styles.green_btn}>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default EmailVerify;
