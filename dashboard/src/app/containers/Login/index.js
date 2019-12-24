import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, PasswordRecovery, LoginContainer, ContainerCard } from './styles';

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
				<ContainerCard>
					<Title type="h1" title="Login" />
					<LoginContainer>
						<Title type="h3" title="Ark Admin Account" />
						<Input type="email" value={this.state.email} onChange={e => this.onChangeInput('email', e)} />

						<Title type="h3" title="Password" />
						<Input
							type="password"
							value={this.state.password}
							onChange={e => this.onChangeInput('password', e)}
						/>

						<Checkbox
							label="Remember Me"
							checked={this.state.checked}
							value={this.state.rememberMe}
							onChange={() => this.onChangeCheckBox('rememberMe')}
						/>
					</LoginContainer>
					<PasswordRecovery>
						<span>Forgot Password?</span>&nbsp;
						<Link to="/password-recovery">Click here</Link>
					</PasswordRecovery>
					<Button route="/" label="Login" />
				</ContainerCard>
			</Container>
		);
	}
}

export default Login;
