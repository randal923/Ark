import React, { Component } from 'react';
import { Container } from './styles';

import Input from '../Input';
import { MdModeEdit, MdCheck, MdClose } from 'react-icons/md';

class Dynamic extends Component {
	state = {
		value: this.props.value,
		form: false,
	};

	onChange = e => {
		this.setState({ value: e.target.value });
	};

	toggleForm = () => {
		this.setState({ form: !this.state.form, value: this.props.value });
	};

	handleSubmit(value) {
		this.props.handleSubmit(value);
		this.toggleForm();
	}

	renderForm() {
		const { value } = this.state;
		return (
			<Container>
				<Input value={value} onChange={this.onChange} />
				<MdCheck size={15} onClick={() => this.handleSubmit(value)} />
				<MdClose size={15} onClick={this.toggleForm} />
			</Container>
		);
	}

	renderValue() {
		const { value } = this.props;
		return (
			<Container>
				<span>{value}</span>
				<MdModeEdit size={15} onClick={() => this.toggleForm()} />
			</Container>
		);
	}

	render() {
		const { form } = this.state;
		return <>{form ? this.renderForm() : this.renderValue()}</>;
	}
}

export default Dynamic;
