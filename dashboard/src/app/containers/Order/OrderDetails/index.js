import React, { Component } from 'react';
import { Container } from './styles';

import Button from '../../../components/Button';
import Title from '../../../components/Text/Title';
import InfoTable from '../../../components/Text/InfoTable';
import Table from '../../../components/Input/Table';

class OrderDetails extends Component {
	renderHeader() {
		return (
			<>
				<Title type="h4" title="Order" />
				<Button type="danger" label="Cancel Order" onCLick={() => alert('Order Cancelled')} />
			</>
		);
	}
	renderCustomerData() {
		return (
			<>
				<Title type="h2" title="Customer Data" />
				<br />
				<InfoTable name="name" value="Customer 1" />
				<InfoTable name="email" value="randal@test.com" />
			</>
		);
	}
	renderPaymentData() {
		return (
			<>
				<Title type="h2" title="Payment Data" />
				<br />
				<InfoTable name="Payment Total" value="US$ 10" />
				<InfoTable name="Payment Option" value="Stripe" />
				<InfoTable name="Payment Status" value="Confirmed" />
			</>
		);
	}

	renderCartData() {
		const data = [
			{
				Movie: 'Harry Potter',
				'Unit Price': 'US$ 10',
				'Total Price': 'US$ 10',
			},
			{
				Movie: 'Harry Potter',
				'Unit Price': 'US$ 15',
				'Total Price': 'US$ 15',
			},
			{
				Movie: 'Harry Potter',
				'Unit Price': 'US$ 20',
				'Total Price': 'US$ 20',
			},
		];
		return (
			<>
				<Title type="h2" title="Cart Data" />
				<br />
				<Table header={['Movie', 'Unit Price', 'Total Price']} data={data} />
			</>
		);
	}
	render() {
		return (
			<Container>
				{this.renderHeader()}
				{this.renderCustomerData()}
				{this.renderPaymentData()}
				{this.renderCartData()}
			</Container>
		);
	}
}

export default OrderDetails;
