import React, { Component } from 'react';
import { Container } from './styles';

import OrderDetails from './OrderDetails';

class Order extends Component {
	render() {
		return (
			<Container>
				<OrderDetails />
			</Container>
		);
	}
}

export default Order;
