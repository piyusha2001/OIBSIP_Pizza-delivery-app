import { Route, Routes } from 'react-router-dom';
import EmailVerify from './components/EmailVerify';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Main from './components/Main';
import PasswordReset from './components/PasswordReset';
import Signup from './components/Signup';
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
		</Routes>
	);
}

export default App;
