import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import pizzas from '../../pizzasdata';
import Pizza from '../Pizza/Pizza';
import '../PizzaDisplay/styles.css';
export default function PizzaDisplay() {
	return (
		<div>
			{/* <div className='row'>
				{pizzas.map((pizza) => {
					return (
						<div className='col-md-4'>
							<Pizza pizza={pizza} />
						</div>
					);
				})}
			</div> */}
			<SimpleGrid
				columns={3}
				marginLeft='80px'
				marginTop='30px'
				spacing={4}
			>
				{pizzas.map((pizza) => {
					return <Pizza pizza={pizza} />;
				})}
			</SimpleGrid>
		</div>
	);
}
