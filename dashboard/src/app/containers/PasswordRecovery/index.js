import React, { Component } from 'react';

import { Container } from './styles';

import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import Title from '../../components/Text/Title';

class PasswordRecovery extends Component {
	state = {
		email: '',
	};

	onChangeInput(field, e) {
		this.setState({ [field]: e.target.value });
	}

	render() {
		return (
			<Container>
				<Title type="h1" title="Reset Password" />
				<Input
					label="E-mail"
					value={this.state.email}
					onChange={e => this.onChangeInput('email', e)}
					type="email"
				/>
				<Button route="/password-reset/1" label="Reset Password" />
			</Container>
		);
	}
}

export default PasswordRecovery;
