import React, { Component } from 'react';
import { Container } from './styles';

import moment from 'moment';
import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

import { connect } from 'react-redux';
import * as actions from '../../actions/orders';

import { currency } from '../../actions';

class Orders extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
		offset: 0,
		limit: 5,
	};

	getOrders() {
		const { offset, limit, search } = this.state;
		if (search) this.props.getOrdersSearch(search, offset, limit);
		else this.props.getOrders(offset, limit);
	}

	componentDidMount() {
		this.getOrders();
	}

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => {
		this.setState({ currentPageNumber }, () => {
			this.getOrders();
		});
	};

	handleSearchSubmit() {
		this.setState({ offset: 0 }, () => {
			const { offset, limit, search } = this.state;
			this.props.getOrdersSearch(search, offset, limit);
		});
	}

	render() {
		const { orders } = this.props;
		const data = [];
		(orders ? orders.docs : []).forEach(item => {
			data.push({
				Customer: item.user.name ? item.user.name : '',
				Total: currency(item.payment.paymentTotal),
				Date: moment(item.createdAt).format('dddd, MMMM Do YYYY'),
				Status: item.paymentStatus,
				Action: `/order/${item._id}`,
			});
		});

		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Orders" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by customer's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => this.handleSearchSubmit()}
					/>
					<br />
					<Table
						header={['Customer', 'Total', 'Date', 'Status', 'Action']}
						data={data}
						buttonType={'ark'}
						buttonLabel={'View'}
					/>
					<Pagination
						offset={this.state.currentPageNumber}
						total={this.props.orders ? this.props.orders.total : 0}
						limit={this.state.limit}
						onClick={currentPageNumber => this.changeCurrentPageNumber(currentPageNumber)}
					/>
				</Container>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.order.orders,
	};
};

export default connect(mapStateToProps, actions)(Orders);
