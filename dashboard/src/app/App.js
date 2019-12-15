import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from '../global/styles';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<h1>Hello World</h1>
			<GlobalStyle />
		</Provider>
	);
}

export default App;
