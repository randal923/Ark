import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Styles
import GlobalStyle from '../global/styles';

// Routes
import { HashRouter as Router, Route } from 'react-router-dom';

// Actions
import { initApp } from './actions/index';

// HOC
import base from './containers/HOC/Base';
import noAuth from './containers/HOC/NoAuth';

//Containers with HOC
import Orders from './containers/Orders';
import Order from './containers/Order';
import Users from './containers/Users';
import User from './containers/User';
import Genres from './containers/Genres';
import Genre from './containers/Genre';
import Movies from './containers/Movies';
import Movie from './containers/Movie';
import Reviews from './containers/Reviews';
import Review from './containers/Review';
import Settings from './containers/Settings';
import Profile from './containers/Profile';

//Containers without HOC
import Login from './containers/Login';
import PasswordRecovery from './containers/PasswordRecovery';
import PasswordReset from './containers/PasswordRecovery/PasswordReset';

class App extends Component {
	componentDidMount() {
		initApp();
	}
	render() {
		return (
			<>
				<Provider store={store}>
					<Router>
						<Route path={'/'} exact component={base(Orders)} />
						<Route path={'/order/:id'} component={base(Order)} />

						<Route path={'/users'} component={base(Users)} />
						<Route path={'/user/:email'} component={base(User)} />

						<Route path={'/genres'} component={base(Genres)} />
						<Route path={'/genre/:id'} component={base(Genre)} />

						<Route path={'/movies'} component={base(Movies)} />
						<Route path={'/movie/:id'} component={base(Movie)} />

						<Route path={'/reviews/:id'} component={base(Reviews)} />
						<Route path={'/review/:id'} component={base(Review)} />

						<Route path={'/settings'} component={base(Settings)} />

						<Route path={'/profile'} component={base(Profile)} />

						<Route path={'/login'} component={noAuth(Login)} />
						<Route path={'/password-recovery'} component={noAuth(PasswordRecovery)} />
						<Route path={'/password-reset/:token'} component={noAuth(PasswordReset)} />
					</Router>
				</Provider>
				<GlobalStyle />
			</>
		);
	}
}

export default App;
