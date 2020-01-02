import React, { Component } from 'react';

import { Container, Header } from './styles';

import Button from '../../../components/Button';
import Title from '../../../components/Text/Title';
import Table from '../../../components/Input/Table';
import Card from '../../../components/Card';
import PaymentDetails from '../PaymentDetails';
import General from '../../../components/Alerts/General';

import { connect } from 'react-redux';
import { currency } from '../../../actions';
import * as actions from '../../../actions/orders';

class OrderDetails extends Component {
	state = {
		warning: null,
	};

	cancelOrder = () => {
		const { order } = this.props;
		if (!order) return null;

		if (window.confirm('Would you like to cancel this order?')) {
			this.props.cancelOrder(order.order._id, error => {
				this.setState({
					warning: { status: !error, msg: error ? error.message : 'Order Cancelled successfully.' },
				});
			});
		}
	};
	renderHeader() {
		if (!this.props.order) return null;
		const { order } = this.props.order;
		return (
			<Header>
				<Title type="h1" title={`Order - ${order.user ? order.user.name : 'No User'}`} />
				{order.cancelled ? (
					<Button type="danger" label="Order Cancelled" />
				) : (
					<Button type="danger" label="Cancel Order" onClick={() => this.cancelOrder()} />
				)}
			</Header>
		);
	}

	renderCustomerData() {
		if (!this.props.order) return null;
		const { order } = this.props.order;
		const data = [
			{
				Name: `${order ? order.user.name : 'No Name'}`,
				'E-mail': `${order ? order.user.email : 'No Email'}`,
				Total: `${order ? currency(order.payment.paymentTotal) : 'No Total'}`,
				Type: `${order ? order.payment.paymentOption : 'No Payment Option'}`,
				Status: `${order ? order.payment.paymentStatus : 'No Payment Status'}`,
			},
		];

		return <Table header={['Name', 'E-mail', 'Total', 'Type', 'Status']} data={data} />;
	}

	renderCartData() {
		if (!this.props.order) return null;
		const { cart } = this.props.order.order;
		const data = [];
		cart.forEach(item => {
			data.push({
				Movie: item.movie.title,
				'Unit Price': currency(item.unitPrice),
			});
		});
		return (
			<>
				<Title type="h2" title="Cart Data" />
				<Table header={['Movie', 'Unit Price']} data={data} />
			</>
		);
	}
	render() {
		return (
			<Card>
				<Container>
					<General warning={this.state.warning} />
					{this.renderHeader()}
					{this.renderCustomerData()}
					{this.renderCartData()}
					<PaymentDetails />
				</Container>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		order: state.order.order,
		user: state.auth.user,
	};
};

export default connect(mapStateToProps, actions)(OrderDetails);
