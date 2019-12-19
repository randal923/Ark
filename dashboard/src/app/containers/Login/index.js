import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, PasswordRecovery, H1 } from './styles';

import Title from '../../components/Text/Title';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Input/Checkbox';
import Button from '../../components/Button';

class Login extends Component {
	state = {
		email: '',
		password: '',
		rememberMe: true,
	};

	onChangeInput(field, e) {
		this.setState({ [field]: e.target.value });
	}
	onChangeCheckBox(field) {
		this.setState({ [field]: !this.state[field] });
	}
	render() {
		return (
			<Container>
				<H1>Login</H1>
				<Title type="h3" title="Ark Admin Account" />
				<Input
					type="email"
					label="E-mail"
					value={this.state.email}
					onChange={e => this.onChangeInput('email', e)}
				/>
				<Title type="h3" title="Password" />
				<Input
					type="password"
					label="Password"
					value={this.state.password}
					onChange={e => this.onChangeInput('password', e)}
				/>
				<Checkbox
					label="Remember Me"
					value={this.state.rememberMe}
					onChange={() => this.onChangeCheckBox('rememberMe')}
				/>
				<PasswordRecovery>
					<span>Forgot Password?</span>&nbsp;
					<Link to="/password-recovery">Click here</Link>
				</PasswordRecovery>
				<Button route="/" label="Login" />
			</Container>
		);
	}
}

export default Login;
