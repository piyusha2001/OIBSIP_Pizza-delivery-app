import React from 'react';
import pizzas from '../../pizzasdata';
import Pizza from '../Pizza/Pizza';
import '../PizzaDisplay/styles.css';
export default function PizzaDisplay() {
	return (
		<div>
			<div className='row'>
				{pizzas.map((pizza) => {
					return (
						<div className='col-md-4'>
							<Pizza pizza={pizza} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
