import React, { Component } from 'react';
import { Container } from './styles';

import Header from './Header';
import Menu from './Menu';
import Content from './Content';

class Dashboard extends Component {
	render() {
		return (
			<Container>
				<Menu history={this.props.history} />
				<Header />
				<Content {...this.props} />
			</Container>
		);
	}
}

export default Dashboard;
