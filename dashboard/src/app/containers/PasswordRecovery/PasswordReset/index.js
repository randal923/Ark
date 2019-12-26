import React, { Component } from 'react';

import { Container, ContentReset, ResetPassword } from './styles';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button';
import Title from '../../../components/Text/Title';

class PasswordRecovery extends Component {
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
				<ContentReset>
					<Title type="h1" title="Reset Password" />
					<ResetPassword>
						<Title type="h3" title="Password" />
						<Input
							type="password"
							value={this.state.password}
							onChange={e => this.onChangeInput('password', e)}
						/>
						<Title type="h3" title="Confirm Password" />
						<Input
							type="password"
							value={this.state.confirmPassword}
							onChange={e => this.onChangeInput('confirmPassword', e)}
						/>
					</ResetPassword>
					<Button route="/login" label="Reset Password" />
				</ContentReset>
			</Container>
		);
	}
}

export default PasswordRecovery;
