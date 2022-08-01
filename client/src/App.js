import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { setUserData } from './actions/userAction.js';
import './index.css';
import Addbases from './Screens/Addbases.js';
import Addpizza from './Screens/Addpizza.js';
import Addtopping from './Screens/Addtopping.js';
import AdminScreen from './Screens/AdminScreen/AdminScreen';
import Baseslist from './Screens/Baseslist.js';
import CartScreen from './Screens/CartScreen/CartScreen';
import Editbase from './Screens/Editbase.js';
import Editpizza from './Screens/Editpizza';
import Edittopping from './Screens/Edittopping.js';
import EmailVerify from './Screens/EmailVerify';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Main from './Screens/Main';
import MyoPizza from './Screens/myoPizza/MyoPizza';
import OrderScreen from './Screens/OrderScreen/OrderScreen';
import Orderslist from './Screens/Orderslist.js';
import PasswordReset from './Screens/PasswordReset';
import Pizzaslist from './Screens/Pizzaslist.js';
import Signup from './Screens/Signup';
import Toppingslist from './Screens/Toppingslist.js';
import Userslist from './Screens/Userslist.js';

function App() {
	const [isAdmin, setIsAdmin] = useState(false);

	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;

	const dispatch = useDispatch();
	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			const url =
				'https://pizza-app-backend12.herokuapp.com/api/auth/jwt/verify';
			axios
				.get(url, {
					params: {
						token,
					},
				})
				.then((res) => {
					if (res.data.success) {
						if (res?.data?.data?.role === 'admin') {
							setIsAdmin(true);
						}
						if (res?.data?.userData) {
							dispatch(setUserData(res.data.userData));
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [dispatch]);

	return (
		<Routes>
			<Route path='/signup' element={<Signup />} />
			<Route path='/login' element={<Login />} />
			<Route path='/users/:id/verify/:token' element={<EmailVerify />} />
			<Route path='/forgot-password' element={<ForgotPassword />} />
			<Route
				path='/password-reset/:id/:token'
				element={<PasswordReset />}
			/>

			{user?.role && (
				<>
					<Route path='/home' element={<Home />} />
					<Route path='/cart' element={<CartScreen />} />
					<Route path='/myoPizza' element={<MyoPizza />} />
					<Route path='/myorders' element={<OrderScreen />} />
				</>
			)}

			{isAdmin && (
				<>
					<Route path='/admin' element={<AdminScreen />} />
					<Route path='/admin/addpizzas' element={<Addpizza />} />
					<Route path='/admin/userslist' element={<Userslist />} />
					<Route path='/admin/orderslist' element={<Orderslist />} />
					<Route path='/admin/pizzaslist' element={<Pizzaslist />} />
					<Route
						path='/admin/editpizza/:pizzaid'
						element={<Editpizza />}
					/>
					<Route path='/admin/baseslist' element={<Baseslist />} />
					<Route path='/admin/addbases' element={<Addbases />} />
					<Route
						path='/admin/editbase/:baseid'
						element={<Editbase />}
					/>
					<Route
						path='/admin/toppingslist'
						element={<Toppingslist />}
					/>
					<Route path='/admin/addtopping' element={<Addtopping />} />
					<Route
						path='/admin/edittopping/:toppingid'
						element={<Edittopping />}
					/>
				</>
			)}
			<Route path='*' element={<Main />} />
		</Routes>
	);
}

export default App;
