import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Addpizza from './Screens/Addpizza.js';
import AdminScreen from './Screens/AdminScreen/AdminScreen';
import Baseslist from './Screens/Baseslist.js';
import CartScreen from './Screens/CartScreen/CartScreen';
import Editpizza from './Screens/Editpizza';
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
import Userslist from './Screens/Userslist.js';
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
			<Route exact path='/admin/addpizzas' element={<Addpizza />} />

			<Route path='/admin/userslist' element={<Userslist />} />

			<Route path='/admin/orderslist' element={<Orderslist />} />

			<Route path='/admin/pizzaslist' element={<Pizzaslist />} />
			<Route path='/admin/editpizza/:pizzaid' element={<Editpizza />} />
			<Route path='/admin/baseslist' element={<Baseslist />} />
		</Routes>
	);
}

export default App;
