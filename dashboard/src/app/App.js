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
import NewGenre from './containers/Genres/NewGenre';
import Genre from './containers/Genre';
import Directors from './containers/Directors';
import NewDirector from './containers/Directors/NewDirector';
import Director from './containers/Director';
import Writers from './containers/Writers';
import NewWriter from './containers/Writers/NewWriter';
import Writer from './containers/Writer';
import Actors from './containers/Actors';
import NewActor from './containers/Actors/NewActor';
import Actor from './containers/Actor';
import Movies from './containers/Movies';
import NewMovie from './containers/Movies/NewMovie';
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
						<Route path={'/order/:id'} exact component={base(Order)} />

						<Route path={'/users'} exact component={base(Users)} />
						<Route path={'/user/:id'} exact component={base(User)} />

						<Route path={'/genres'} exact component={base(Genres)} />
						<Route path={'/genres/new'} exact component={base(NewGenre)} />
						<Route path={'/genre/:id'} exact component={base(Genre)} />

						<Route path={'/directors'} exact component={base(Directors)} />
						<Route path={'/directors/new'} exact component={base(NewDirector)} />
						<Route path={'/director/:id'} exact component={base(Director)} />

						<Route path={'/writers'} exact component={base(Writers)} />
						<Route path={'/writers/new'} exact component={base(NewWriter)} />
						<Route path={'/writer/:id'} exact component={base(Writer)} />

						<Route path={'/actors'} exact component={base(Actors)} />
						<Route path={'/actors/new'} exact component={base(NewActor)} />
						<Route path={'/actor/:id'} exact component={base(Actor)} />

						<Route path={'/movies'} exact component={base(Movies)} />
						<Route path={'/movies/new'} exact component={base(NewMovie)} />
						<Route path={'/movie/:id'} exact component={base(Movie)} />

						<Route path={'/reviews/:id'} exact component={base(Reviews)} />
						<Route path={'/review/:id'} exact component={base(Review)} />

						<Route path={'/settings'} exact component={base(Settings)} />

						<Route path={'/profile'} exact component={base(Profile)} />

						<Route path={'/login'} exact component={noAuth(Login)} />
						<Route path={'/password-recovery'} exact component={noAuth(PasswordRecovery)} />
						<Route path={'/password-reset/:token'} exact component={noAuth(PasswordReset)} />
					</Router>
				</Provider>
				<GlobalStyle />
			</>
		);
	}
}

export default App;
