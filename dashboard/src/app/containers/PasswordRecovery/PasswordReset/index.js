import React, { Component } from 'react';

import { Container } from './styles';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';

class PasswordReset extends Component {
	state = {
		password: '',
		confirmPassword: '',
	};

	onChangeInput(field, e) {
		this.setState({ [field]: e.target.value });
	}

	render() {
		return (
			<Container>
				<Input
					label="Password"
					type="password"
					value={this.state.password}
					onChange={e => this.onChangeInput('password', e)}
				/>
				<Input
					label="Confirm Password"
					type="password"
					value={this.state.confirmPassword}
					onChange={e => this.onChangeInput('confirmPassword', e)}
				/>
				<Button route="/login" label="Reset Password" />
			</Container>
		);
	}
}

export default PasswordReset;
