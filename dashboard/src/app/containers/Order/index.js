import React, { Component } from 'react';
import { Container } from './styles';

import OrderDetails from './OrderDetails';
import PaymentDetails from './PaymentDetails';

class Order extends Component {
	render() {
		return (
			<Container>
				<h1>Order</h1>
				<OrderDetails />
				<PaymentDetails />
			</Container>
		);
	}
}

export default Order;
