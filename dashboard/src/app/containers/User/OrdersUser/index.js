import React, { Component } from 'react';
import { Container } from './styles';

import moment from 'moment';
import Title from '../../../components/Text/Title';
import Table from '../../../components/Input/Table';

class OrdersUser extends Component {
	render() {
		const data = [
			{
				ID: '123512341234SAsfsdfsfd',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/123512341234SAsfsdfsfd',
			},
			{
				ID: '12351dfgadsfafwasdvcxcvxcvxcvd',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12351dfgadsfafwasdvcxcvxcvxcvd',
			},
			{
				ID: '123512dsgfgnbvcbnDcbvcvmgmnbn',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/123512dsgfgnbvcbnDcbvcvmgmnbn',
			},
		];
		return (
			<Container>
				<Title type="h2" title="Completed Orders" />
				<br />
				<Table
					header={['ID', 'Total', 'Date', 'Status', 'Action']}
					data={data}
					buttonType={'ark'}
					buttonLabel={'View'}
				/>
			</Container>
		);
	}
}

export default OrdersUser;
