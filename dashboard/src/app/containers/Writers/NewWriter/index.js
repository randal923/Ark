import React, { Component } from 'react';
import { Container, Header, Data } from './styles';

import Title from '../../../components/Text/Title';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Input from '../../../components/Input/Input';
import General from '../../../components/Alerts/General';

import { connect } from 'react-redux';
import * as actions from '../../../actions/writers';

class newWriter extends Component {
	state = {
		name: '',
		errors: {},
		warning: null,
	};

	validate() {
		const { name } = this.state;
		const errors = {};
		if (!name) errors.name = 'Name cannot be blank';

		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}
	createWriter() {
		if (!this.validate()) return null;

		this.props.createWriter(this.state, error => {
			this.setState({
				warning: {
					status: !error,
					msg: error ? error.message : 'New writer created successfully',
				},
			});
		});
	}
	renderHeader() {
		const { name } = this.state;

		return (
			<Header>
				<Title type="h1" title={name || ''} />
				<Button label="Save" type="success" onClick={() => this.createWriter()} />
			</Header>
		);
	}

	onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate());

	renderData() {
		const { name, errors } = this.state;

		return (
			<Data>
				<Input
					name="name"
					label="name: "
					value={name}
					error={errors.name}
					onChange={e => this.onChangeInput('name', e.target.value)}
				/>
			</Data>
		);
	}
	render() {
		return (
			<Container>
				<Card>
					{this.renderHeader()}
					<General warning={this.state.warning} />
					{this.renderData()}
				</Card>
			</Container>
		);
	}
}

export default connect(null, actions)(newWriter);
