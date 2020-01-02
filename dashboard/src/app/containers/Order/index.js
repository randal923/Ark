import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/orders';

import OrderDetails from './OrderDetails';
class Order extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getOrder(id);
	}

	componentWillUnmount() {
		this.props.cleanOrder();
	}

	render() {
		return (
			<>
				<OrderDetails />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.uder,
	};
};
export default connect(mapStateToProps, actions)(Order);
