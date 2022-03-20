import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import PizzaDisplay from '../../Components/PizzaDisplay/PizzaDisplay';
import './styles.module.css';
function Home() {
	return (
		// <Fragment>
		// 	<div>
		// 		<Navbar />
		// 	</div>
		<div>
			<Navbar />
			<PizzaDisplay />
		</div>
		// </Fragment>
	);
}

export default Home;
