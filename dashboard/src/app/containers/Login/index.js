import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, PasswordRecovery, LoginContainer, ContainerCard } from './styles';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Title from '../../components/Text/Title';
import Input from '../../components/Input/Input';
import Checkbox from '../../components/Input/Checkbox';
import Button from '../../components/Button';
import Danger from '../../components/Alerts/Danger';

class Login extends Component {
	state = {
		email: '',
		password: '',
		rememberMe: true,
		errors: {},
	};
	onChangeInput(field, e) {
		this.setState({ [field]: e.target.value });
	}
	onChangeCheckBox(field) {
		this.setState({ [field]: !this.state[field] });
	}

	handleLogin() {
		const { email, password, rememberMe } = this.state;
		if (!this.validate()) return;
		this.props.handleLogin({ email, password, rememberMe }, error => {
			//this.setState({ errors: { ...this.state.errors, form: error } });
			console.log(error);
		});
	}

	validate() {
		const { email, password } = this.state;
		const errors = {};

		if (!email) errors.email = 'Wrong Email';
		if (!password) errors.password = 'Wrong Password';
		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}

	render() {
		return (
			<Container>
				<ContainerCard>
					<Title type="h1" title="Login" />
					<LoginContainer>
						<Title type="h3" title="Ark Admin Account" />
						<Danger error={this.state.errors.form} />
						<Input
							type="email"
							error={this.state.errors.email}
							value={this.state.email}
							onChange={e => this.onChangeInput('email', e)}
						/>

						<Title type="h3" title="Password" />
						<Input
							type="password"
							error={this.state.errors.password}
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
					<Button route="/" label="Login" onClick={() => this.handleLogin()} />
				</ContainerCard>
			</Container>
		);
	}
}

export default connect(null, actions)(Login);
