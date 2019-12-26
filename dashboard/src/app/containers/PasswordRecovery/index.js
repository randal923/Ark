import React, { Component } from 'react';

import { Container, Content, ResetPassword } from './styles';

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
				<Content>
					<Title type="h1" title="Recover Password" />
					<ResetPassword>
						<Title type="h3" title="Email" />
						<Input value={this.state.email} onChange={e => this.onChangeInput('email', e)} type="email" />
					</ResetPassword>

					<Button route="/password-reset/1" label="Recover Password" />
				</Content>
			</Container>
		);
	}
}

export default PasswordRecovery;
