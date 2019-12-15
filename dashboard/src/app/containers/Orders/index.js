import React, { Component } from 'react';
import { Container } from './styles';

import { Title } from '../../components/Text/Title';

class Orders extends Component {
	render() {
		return (
			<Container>
				<Title type="h1" title="Orders" />
			</Container>
		);
	}
}

export default Orders;
