import React, { Component } from 'react';

import { Container } from './styles';

import { connect } from 'react-redux';
import * as actions from '../../../actions/orders';

import General from '../../../components/Alerts/General';
import Title from '../../../components/Text/Title';
import DynamicList from '../../../components/DynamicList';

class PaymentDetails extends Component {
	state = {
		warning: null,
	};

	cleanState() {
		this.setState({ warning: null });
	}

	onAddDynamicList = text => {
		this.cleanState();
		if (!text) return this.setState({ warning: { status: false, msg: 'Status field is empty' } });
		const { order } = this.props;
		this.props.setNewPaymentStatus(text, order.order.payment._id, order.order._id, error => {
			if (error) this.setState({ warning: { status: false, msg: error.message } });
		});
	};

	render() {
		const { order } = this.props;
		const { warning } = this.state;
		if (!order) return <div></div>;
		const status = (order.registration || []).reduce(
			(all, item) => (item.type === 'payment' ? all.concat([item.status]) : all),
			[]
		);

		return (
			<Container>
				<Title type="h2" title="Payment" />
				<General warning={warning} />
				<DynamicList data={status} onRemove={this.onRemoveDynamicList} onAdd={this.onAddDynamicList} />
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return {
		order: state.order.order,
		user: state.auth.user,
	};
};
export default connect(mapStateToProps, actions)(PaymentDetails);
