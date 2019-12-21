import React, { Component } from 'react';
import { Container } from './styles';

import moment from 'moment';
import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

class Orders extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });
	render() {
		const data = [
			{
				Customer: 'Customer 1',
				Total: 89.9,
				Date: moment().toString(),
				Status: 'Waiting for payment',
				Action: '/order/123512341234SADASd',
			},
			{
				Customer: 'Customer 2',
				Total: 89.9,
				Date: moment().toString(),
				Status: 'Waiting for payment',
				Action: '/order/12351dfgadsfafwADASd',
			},
			{
				Customer: 'Customer 3',
				Total: 89.9,
				Date: moment().toString(),
				Status: 'Waiting for payment',
				Action: '/order/123512dsgfgnbvcbnDASd',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().toString(),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADASd',
			},
		];
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h3" title="Orders" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by customer's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					<br />
					<Table header={['Customer', 'Total', 'Date', 'Status', 'Action']} data={data} />
					<Pagination
						offset={0}
						total={120}
						limit={20}
						onClick={currentPageNumber => this.changeCurrentPageNumber(currentPageNumber)}
					/>
				</Container>
			</Card>
		);
	}
}

export default Orders;
