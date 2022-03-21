import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
ReactDOM.render(
	<Provider store={store}>
		<ChakraProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</Provider>,
	document.getElementById('root'),
);
