import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import AdminScreen from './Screens/AdminScreen/AdminScreen';
import CartScreen from './Screens/CartScreen/CartScreen';
import EmailVerify from './Screens/EmailVerify';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Main from './Screens/Main';
import MyoPizza from './Screens/myoPizza/MyoPizza';
import OrderScreen from './Screens/OrderScreen/OrderScreen';
import PasswordReset from './Screens/PasswordReset';
import Signup from './Screens/Signup';
function App() {
	return (
		//if user role is admin, render AdminScreen, else render Main
		// <div className='App'>
		// 	{user && user.role === 'admin' ? (
		// 		<AdminScreen />
		// 	) : (
		// 		<Main />
		// 	)}

		<Routes>
			<Route path='/' exact element={<Main />} />
			<Route path='/signup' exact element={<Signup />} />
			<Route path='/login' exact element={<Login />} />
			{/* <Route path='/' element={<Navigate replace to='/login' />} /> */}
			<Route path='/users/:id/verify/:token' element={<EmailVerify />} />
			<Route path='/forgot-password' element={<ForgotPassword />} />
			<Route
				path='/password-reset/:id/:token'
				element={<PasswordReset />}
			/>
			<Route path='/home' exact element={<Home />} />
			<Route path='/cart' exact element={<CartScreen />} />
			<Route path='/myoPizza' exact element={<MyoPizza />} />
			<Route path='/myorders' exact element={<OrderScreen />} />

			<Route path='/admin' exact element={<AdminScreen />} />
		</Routes>
	);
}

export default App;
