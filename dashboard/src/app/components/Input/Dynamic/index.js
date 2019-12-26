import React, { Component } from 'react';

import Button from '../../Button/index';
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
			<>
				<input value={value} onChange={this.onChange} />
				<Button type="warning" label={<MdCheck />} onClick={() => this.handleSubmit(value)} />
				<Button type="warning" label={<MdClose />} onClick={this.toggleForm} />
			</>
		);
	}

	renderValue() {
		const { value } = this.props;
		return (
			<>
				<span>{value}</span>
				<Button type="warning" label={<MdModeEdit />} onClick={() => this.toggleForm()} />
			</>
		);
	}

	render() {
		const { form } = this.state;
		return <>{form ? this.renderForm() : this.renderValue()}</>;
	}
}

export default Dynamic;
