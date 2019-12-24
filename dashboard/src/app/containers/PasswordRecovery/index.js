import React, { Component } from 'react';

import { Container, Content, ResetPassword } from './styles';

import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import Title from '../../components/Text/Title';

class PasswordRecovery extends Component {
	state = {
		email: '',
		password: '',
		confirmPassword: '',
	};

	onChangeInput(field, e) {
		this.setState({ [field]: e.target.value });
	}

	render() {
		return (
			<Container>
				<Content>
					<Title type="h1" title="Reset Password" />
					<ResetPassword>
						<Title type="h3" title="Email" />
						<Input value={this.state.email} onChange={e => this.onChangeInput('email', e)} type="email" />
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

					<Button route="/password-reset/1" label="Reset Password" />
				</Content>
			</Container>
		);
	}
}

export default PasswordRecovery;
