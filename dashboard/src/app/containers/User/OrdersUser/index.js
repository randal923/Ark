import React, { Component } from 'react';
import { Container } from './styles';
import moment from 'moment';

import { currency } from '../../../actions/index';
import Title from '../../../components/Text/Title';
import Table from '../../../components/Input/Table';

import { connect } from 'react-redux';
import * as actions from '../../../actions/users';

class OrdersUser extends Component {
	state = {
		offset: 0,
		limit: 5,
	};

	getOrders() {
		const { offset, limit } = this.state;
		const { user } = this.props;
		console.log(user);

		if (!user) return null;
		this.props.getUserOrders(user._id, offset, limit);
	}

	componentDidMount() {
		this.getOrders();
	}
	componentDidUpdate(prevProps) {
		if (!prevProps.user && this.props.user) this.getOrders();
	}

	changeCurrentNumber = offset => this.setState({ offset }, () => this.getOrders());
	render() {
		const { userOrders } = this.props;
		if (!userOrders) return <div></div>;
		const data = [];
		(userOrders ? userOrders.docs : []).forEach(item => {
			data.push({
				ID: item._id,
				Total: currency(item.payment.paymentTotal),
				Date: moment(item.createdAt).format('DD/MM/YYYY'),
				Status: `${item.payment.paymentStatus || '-'}`,
				Action: `/order/${item._id}`,
			});
		});
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

const mapStateToProps = state => ({
	user: state.user.user,
	userOrders: state.user.userOrders,
});

export default connect(mapStateToProps, actions)(OrdersUser);
