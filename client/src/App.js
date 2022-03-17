import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';

function App() {
	const user = localStorage.getItem('token');

	return (
		<Routes>
			{user && <Route path='/' exact element={<Main />} />}
			<Route path='/signup' exact element={<Signup />} />
			<Route path='/login' exact element={<Login />} />
			<Route path='/' element={<Navigate replace to='/login' />} />
		</Routes>
	);
}

export default App;
