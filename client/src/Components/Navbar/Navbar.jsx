import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
export default function Navbar() {
	const cartstate = useSelector((state) => state.cartReducer);
	const user = JSON.parse(localStorage.getItem('user'));
	return (
		<nav className='navbar navbar-expand-lg navbar-dark custom-navbar  '>
			<div className='container-fluid'>
				<a className='navbar-brand'>Navbar</a>
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
							{user?.email ? (
								<text
									className='nav-link active '
									aria-current='page'
								>
									{user?.firstName}
								</text>
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
							<a className='nav-link active' href='/cart'>
								Cart : {cartstate.cartItems.length}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
