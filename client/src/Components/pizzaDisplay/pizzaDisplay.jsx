import React from 'react';
import pizzas from '../../pizzadata';
export default function pizzadisplay() {
	return (
		<div>
			{/* {pizzas.map((pizza) => {
					return (
						<div className='col-md-4'>
							<div>
								<Pizza pizza={pizza} />
							</div>
						</div>
					);
				})} */}
			<h1> {pizzas.length()}</h1>
		</div>
	);
}
