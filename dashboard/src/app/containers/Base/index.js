import React, { Component } from 'react';
import { Container } from './styles';

import Header from './Header';
import Menu from './Menu';
import Content from './Content';

class Dashboard extends Component {
	state = {
		open: true,
	};

	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		return (
			<Container open={this.state.open}>
				<Menu history={this.props.history} open={this.state.open} toggleOpen={this.toggleOpen} />
				<Header />
				<Content {...this.props} />
			</Container>
		);
	}
}

export default Dashboard;
