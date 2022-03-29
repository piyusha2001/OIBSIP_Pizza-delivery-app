import { Text } from '@chakra-ui/react';
import React from 'react';
import './styles.css';

export default function AdminScreen() {
	return (
		<>
			<div>
				<Text textAlign='center' m={5} fontSize='3xl' fontWeight='bold'>
					Admin Panel
				</Text>
				<div className='row justify-content-center'>
					<div className='col-md-10'>
						<ul className='adminfunctions'>
							<li>
								<a href='/admin/userslist'>Users List</a>
							</li>
							<li>
								<a href='/admin/pizzaslist'>Pizzas List</a>
							</li>
							<li>
								<a href='/admin/addpizzas'>Add New Pizza</a>
							</li>
							<li>
								<a href='/admin/orderslist'>Orders List</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* <Box width='75%' margin='auto'>
				<VStack>
					<HStack
						width='100%'
						spacing={5}
						backgroundColor='#b33030'
						justifyContent='center'
						color='black'
						padding={4}
						fontSize='20px'
						fontWeight='semibold'
					>
						<a href='/admin/userslist'>Users List</a>

						<a href='/admin/pizzaslist'>Pizzas List</a>

						<a href='/admin/addpizza'>Add new Pizza</a>

						<a href='/admin/orderslist'>Orders List</a>
					</HStack>

					<Routes>
						<Route
							path='/admin/addpizza'
							exact
							element={<Addpizza />}
						/>
						<Route
							path='/admin/orderslist'
							element={<Orderslist />}
						/>
						<Route
							path='/admin/pizzaslist'
							element={<Pizzaslist />}
						/>
						<Route
							path='/admin/userslist'
							element={<Userslist />}
						/>
					</Routes> */}
			{/* </VStack> */}
			{/* </Box> */}
		</>
	);
}
