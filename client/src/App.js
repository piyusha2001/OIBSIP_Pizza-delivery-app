import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import EmailVerify from './Screens/EmailVerify';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Main from './Screens/Main';
import PasswordReset from './Screens/PasswordReset';
import Signup from './Screens/Signup';
function App() {
	// const user = localStorage.getItem('token');

	return (
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
		</Routes>
	);
}

export default App;
