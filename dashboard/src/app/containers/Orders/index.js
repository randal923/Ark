import React, { Component } from 'react';
import { Container } from './styles';
import moment from 'moment';
import { Title } from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Table';
class Orders extends Component {
	state = {
		search: '',
	};

	onChangeSearch = e => this.setState({ search: e.target.value });
	render() {
		const data = [
			{
				Customer: 'Customer 1',
				Total: 89.9,
				Date: moment().toISOSring(),
				status: 'Waiting for payment',
				detailsButton: '/order/123512341234SADASd',
			},
			{
				Customer: 'Customer 2',
				Total: 89.9,
				Date: moment().toISOSring(),
				status: 'Waiting for payment',
				detailsButton: '/order/12351dfgadsfafwADASd',
			},
			{
				Customer: 'Customer 3',
				Total: 89.9,
				Date: moment().toISOSring(),
				status: 'Waiting for payment',
				detailsButton: '/order/123512dsgfgnbvcbnDASd',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().toISOSring(),
				status: 'Waiting for payment',
				detailsButton: '/order/12asdsdczxcADASd',
			},
		];
		return (
			<Container>
				<Card>
					<Title type="h1" title="Orders" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by customer's name"}
						onChange={e => this.onChangeSearch(e)}
					/>
					<Table header={['customer', 'Total', 'Date', 'Status']} data={data} />
					<Pagination />
				</Card>
			</Container>
		);
	}
}

export default Orders;
