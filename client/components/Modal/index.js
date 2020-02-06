import React, { Component } from 'react';

// Components
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo';
import Title from '../Title';

// Style
import { Container, Content, BackDrop, Login, Create, LogoStyle, Form } from './styles';

class Modal extends Component {
	state = {
		createAccountForm: false,
	};

	handleJoinArk() {
		this.setState({ createAccountForm: !this.state.createAccountForm });
	}
	renderCreate() {
		return (
			<Create>
				<Title type="h3" title="Create Account" />
				<p>
					Creating an Ark account is easy and free. You can choose whether to download our software or use the
					website only. Please note that only by downloading Ark software you will be able to download movies
					to your computer.
				</p>
				<Button type="ark" label="JOIN ARK" onClick={() => this.handleJoinArk()} />
			</Create>
		);
	}

	renderCreateAccountForm() {
		return (
			<Form>
				<Input label="First Name" />
				<Input label="Last Name" />
				<Input label="Email Address" />
				<Input label="Password" />
				<Input label="Confirm Password" />
			</Form>
		);
	}
	render() {
		return (
			<Container>
				<BackDrop onClick={() => this.props.handleModal()} />
				<Content>
					<Login>
						<Title type="h3" title="Sign In" />
						<label>Ark Existing Account</label>
						<Input placeholder="Email" />
						<label>Password</label>
						<Input placeholder="Password" />
						<Button type="ark" label="Sign in" />
						<LogoStyle>
							<Logo />
							<h1>Ark</h1>
						</LogoStyle>
					</Login>
					{this.state.createAccountForm ? this.renderCreateAccountForm() : this.renderCreate()}
				</Content>
			</Container>
		);
	}
}

export default Modal;
