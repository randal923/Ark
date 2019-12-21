import React from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import GlobalStyle from '../global/styles';

// Routes
import { HashRouter as Router, Route } from 'react-router-dom';

//Containers with HOC
import base from './containers/HOC/Base';
import Orders from './containers/Orders';
import Order from './containers/Order';

//Containers without HOC
import Login from './containers/Login';
import PasswordRecovery from './containers/PasswordRecovery';
import PasswordReset from './containers/PasswordRecovery/PasswordReset';

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Route path={'/'} exact component={base(Orders)} />
					<Route path={'/order'} component={base(Order)} />

					<Route path={'/login'} component={Login} />
					<Route path={'/password-recovery'} component={PasswordRecovery} />
					<Route path={'/password-reset/:token'} component={PasswordReset} />
				</Router>
			</Provider>
			<GlobalStyle />
		</>
	);
}

export default App;
