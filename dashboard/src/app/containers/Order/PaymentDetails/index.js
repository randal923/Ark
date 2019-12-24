import React, { Component } from 'react';

import Title from '../../../components/Text/Title';
import DynamicList from '../../../components/DynamicList';
import { Container } from './styles';
class PaymentDetails extends Component {
	state = {
		status: ['Waiting For Payment', 'Processing payment'],
	};

	onRemoveDynamicList = index => {
		let { status } = this.state;
		status = status.filter((item, _index) => _index !== index);
		this.setState({ status });
	};

	onAddDynamicList = text => {
		if (!text) return false;
		let { status } = this.state;
		status.push(text);
		this.setState({ status });
	};
	render() {
		const { status } = this.state;
		return (
			<Container>
				<Title type="h2" title="Payment" />
				<DynamicList data={status} onRemove={this.onRemoveDynamicList} onAdd={this.onAddDynamicList} />
			</Container>
		);
	}
}

export default PaymentDetails;
