import React, { Component } from 'react';

import { Container, Header } from './styles';

import Button from '../../../components/Button';
import Title from '../../../components/Text/Title';
import Table from '../../../components/Input/Table';
import Card from '../../../components/Card';
import PaymentDetails from '../PaymentDetails';

class OrderDetails extends Component {
	renderHeader() {
		return (
			<Header>
				<Title type="h1" title="Order" />
				<Button type="danger" label="Cancel Order" onCLick={() => alert('Order Cancelled')} />
			</Header>
		);
	}

	renderCustomerData() {
		const data = [
			{
				Name: 'Customer 1',
				'E-mail': 'customer1@me.com',
				Total: 'US$ 10',
				Type: 'Stripe',
				Status: 'Confirmed',
			},
		];

		return <Table header={['Name', 'E-mail', 'Total', 'Type', 'Status']} data={data} />;
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
				<Table header={['Movie', 'Unit Price', 'Total Price']} data={data} />
			</>
		);
	}
	render() {
		return (
			<Card>
				<Container>
					{this.renderHeader()}
					{this.renderCustomerData()}
					{this.renderCartData()}
					<PaymentDetails />
				</Container>
			</Card>
		);
	}
}

export default OrderDetails;
