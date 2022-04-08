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

	const userstate = useSelector((state) => state.setUserDataReducer);
	const user = userstate.userData;

	const dispatch = useDispatch();
	useEffect(() => {
		if (user) {
			if (user?.role === 'admin') {
				setIsAdmin(true);
			}
		}
	}, [user]);

	useEffect(() => {
		let token = localStorage.getItem('token');
		if (token) {
			const url = 'http://localhost:8080/api/auth/jwt/verify';
			axios
				.get(url, {
					params: {
						token,
					},
				})
				.then((res) => {
					if (res.data.success) {
						if (res?.data?.user?.role === 'admin') {
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
	}, []);

	return (
		<Routes>
			<Route path='/' exact element={<Main />} />
			<Route path='*' exact element={<Main />} />
			<Route path='/signup' exact element={<Signup />} />
			<Route path='/login' exact element={<Login />} />
			<Route path='/users/:id/verify/:token' element={<EmailVerify />} />
			<Route path='/forgot-password' element={<ForgotPassword />} />
			<Route
				path='/password-reset/:id/:token'
				element={<PasswordReset />}
			/>
			{user?.role && (
				<>
					<Route path='/home' exact element={<Home />} />
					<Route path='/cart' exact element={<CartScreen />} />
					<Route path='/myoPizza' exact element={<MyoPizza />} />
					<Route path='/myorders' exact element={<OrderScreen />} />
				</>
			)}

			{isAdmin && (
				<>
					<Route path='/admin' exact element={<AdminScreen />} />
					<Route
						exact
						path='/admin/addpizzas'
						element={<Addpizza />}
					/>

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
		</Routes>
	);
}

export default App;
