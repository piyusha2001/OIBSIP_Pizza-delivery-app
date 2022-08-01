import {
	Alert,
	AlertIcon,
	Button,
	FormControl,
	FormLabel,
	Input,
	Spinner,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBaseById, updateBase } from '../actions/myoPizzaAction';
import AdminScreen from './AdminScreen/AdminScreen';

export default function Editbase() {
	const { baseid } = useParams();
	const dispatch = useDispatch();
	const updatebasestate = useSelector((state) => state.updateBase);
	const getbasebyidstate = useSelector((state) => state.getBaseById);
	const { base, error, loading } = getbasebyidstate;
	const { updatesuccess, updateloading, updateerror } = updatebasestate;

	const [baseName, setBaseName] = useState('');
	const [smallBasePrice, setSmallBasePrice] = useState();
	const [largeBasePrice, setLargeBasePrice] = useState();
	const [mediumBasePrice, setMediumBasePrice] = useState();
	const [baseStock, setBaseStock] = useState('');

	useEffect(() => {
		if (base) {
			if (base._id === baseid) {
				setBaseName(base.name);
				setSmallBasePrice(base.prices[0]['small']);
				setMediumBasePrice(base.prices[0]['medium']);
				setLargeBasePrice(base.prices[0]['large']);
				setBaseStock(base.stock);
			} else {
				dispatch(getBaseById(baseid));
			}
		} else {
			dispatch(getBaseById(baseid));
		}
	}, [dispatch, base, baseid]);

	function formHandler(e) {
		e.preventDefault();
		const updatedBase = {
			_id: baseid,
			name: baseName,
			stock: Number(baseStock),

			prices: {
				small: Number(smallBasePrice),
				medium: Number(mediumBasePrice),
				large: Number(largeBasePrice),
			},
		};
		dispatch(updateBase(updatedBase));
		// dispatch(addPizza(pizza));
	}
	return (
		<>
			<AdminScreen />
			<Text fontSize='2xl' textAlign='center' fontWeight='semibold'>
				Edit Base
			</Text>
			{loading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{updateloading && (
				<Spinner
					thickness='4px'
					speed='0.65s'
					emptyColor='gray.200'
					color='blue.500'
					size='xl'
				/>
			)}

			{error && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{updateerror && (
				<Alert status='error'>
					<AlertIcon />
					Something went wrong ! Try again
				</Alert>
			)}

			{updatesuccess && (
				<Alert
					width='50%'
					margin='auto'
					alignItems='center'
					justifyContent='center'
					status='success'
				>
					<AlertIcon />
					Base details edited successfully
				</Alert>
			)}
			<FormControl width='50%' margin='auto' marginBottom={3} isRequired>
				<FormLabel mt={2} htmlFor='name'>
					Base Name
				</FormLabel>
				<Input
					value={baseName}
					onChange={(e) => {
						setBaseName(e.target.value);
					}}
					placeholder='Base Name'
				/>
				<FormLabel mt={2} htmlFor='stock'>
					Base Stock
				</FormLabel>
				<Input
					value={baseStock}
					onChange={(e) => {
						setBaseStock(e.target.value);
					}}
					placeholder='Base Stock'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Small Pizza Price
				</FormLabel>
				<Input
					value={smallBasePrice}
					onChange={(e) => {
						setSmallBasePrice(e.target.value);
					}}
					placeholder='Small base price'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Medium Pizza Price{' '}
				</FormLabel>
				<Input
					value={mediumBasePrice}
					onChange={(e) => {
						setMediumBasePrice(e.target.value);
					}}
					placeholder='Medium base price'
				/>
				<FormLabel mt={2} htmlFor='price'>
					Large Pizza Price
				</FormLabel>
				<Input
					value={largeBasePrice}
					onChange={(e) => {
						setLargeBasePrice(e.target.value);
					}}
					placeholder='Large base price'
				/>
				<Button
					margin={2}
					backgroundColor='#b33030'
					width='200px'
					type='submit'
					color='white'
					onClick={formHandler}
				>
					{' '}
					EDIT BASE{' '}
				</Button>
			</FormControl>
		</>
	);
}
