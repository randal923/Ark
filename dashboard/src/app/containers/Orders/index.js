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
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/123512341234SAsfsdfsfd',
			},
			{
				Customer: 'Customer 2',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12351dfgadsfafwasdvcxcvxcvxcvd',
			},
			{
				Customer: 'Customer 3',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/123512dsgfgnbvcbnDcbvcvmgmnbn',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
			{
				Customer: 'Customer 4',
				Total: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Status: 'Waiting for payment',
				Action: '/order/12asdsdczxcADA123141231231231',
			},
		];
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Orders" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by customer's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					<br />
					<Table
						header={['Customer', 'Total', 'Date', 'Status', 'Action']}
						data={data}
						buttonType={'ark'}
						buttonLabel={'View'}
					/>
					<Pagination
						total={25}
						limit={5}
						onClick={currentPageNumber => this.changeCurrentPageNumber(currentPageNumber)}
					/>
				</Container>
			</Card>
		);
	}
}

export default Orders;
