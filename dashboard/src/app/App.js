import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import GlobalStyle from '../global/styles';

// Routes
import { HashRouter as Router, Route } from 'react-router-dom';

//Containers
import Orders from './containers/Orders';
import base from './containers/HOC/Base';

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Route path={'/'} exact component={base(Orders)} />
				</Router>
			</Provider>
			<GlobalStyle />
		</>
	);
}

export default App;
