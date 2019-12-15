import React, { Component } from 'react';
import { Container } from './styles';

class Dashboard extends Component {
	render() {
		return (
			<Container>
				<div>Menu</div>
				<div>
					<div>Header</div>
					<div>{this.props.children}</div>
				</div>
			</Container>
		);
	}
}

export default Dashboard;
