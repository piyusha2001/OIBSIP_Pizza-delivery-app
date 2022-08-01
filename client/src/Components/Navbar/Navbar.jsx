import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';
export default function Navbar() {
	const cartstate = useSelector((state) => state.cart);
	const userstate = useSelector((state) => state.setUserData);
	const user = userstate.userData;

	function handleLogout() {
		localStorage.removeItem('cartItems');
		localStorage.removeItem('token');
		window.location.replace('/');
	}

	return (
		<nav className='navbar navbar-expand-lg navbar-dark custom-navbar  '>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					PIZZA PARADISE
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item '>
							{user && user?.email ? (
								<div className='dropdown '>
									<a
										className='btn btn-secondary dropdown-toggle custom-navbar nav-text'
										type='button'
										id='dropdownMenuButton1'
										data-bs-toggle='dropdown'
										style={{
											border: '0',
										}}
										href
									>
										{user && user?.firstName}
									</a>
									<ul
										className='dropdown-menu'
										aria-labelledby='dropdownMenuButton1'
									>
										<li>
											<Link
												to='/myorders'
												className='dropdown-item'
											>
												My Orders
											</Link>
										</li>
										<li>
											<a
												className='dropdown-item'
												onClick={handleLogout}
												href
											>
												Logout
											</a>
										</li>
									</ul>
								</div>
							) : (
								<a
									className='nav-link active '
									aria-current='page'
									href='/login'
								>
									Login
								</a>
							)}
						</li>
						<li className='nav-item arrow '>
							<Link to='/cart' className='nav-link active'>
								Cart : {cartstate?.cartItems?.length}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
