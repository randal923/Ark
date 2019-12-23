import React, { Component } from 'react';
import { Container } from './styles';

import Table from '../../../components/Input/Table';
import Card from '../../../components/Card';

class OrderDetails extends Component {
	render() {
		const data = [
			{
				Name: 'Customer 1',
				'E-mail': 'randal.andrade@hotmail.com',
				Movies: ['Harry Potter 1', 'Harry Potter 1', 'Harry Potter 1'],
				'Unit Price': '10',
				Total: '10',
				Type: 'Stripe',
				Status: 'Confirmed',
			},
		];
		return (
			<Container>
				<Card>
					<Table
						header={['Name', 'E-mail', 'Movies', 'Unit Price', 'Total', 'Type', 'Status', 'Action']}
						data={data}
						buttonType={'danger'}
						buttonLabel={'Cancel Order'}
					/>
				</Card>
			</Container>
		);
	}
}

export default OrderDetails;
