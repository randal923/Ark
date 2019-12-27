import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from './styles';

import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import Input from '../../components/Input/Input';

class Profile extends Component {
	state = {
		name: 'User 1',
		email: 'user1@email.com',
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
	};

	renderSettings() {
		const { name, email } = this.state;
		return (
			<Container>
				<InfoTable
					name="name"
					value={<Dynamic name="name" value={name} handleSubmit={value => this.setState({ name: value })} />}
				/>
				<InfoTable
					name="email"
					value={
						<Dynamic name="email" value={email} handleSubmit={value => this.setState({ email: value })} />
					}
				/>
			</Container>
		);
	}

	renderPassword() {
		const { oldPassword, newPassword, confirmPassword } = this.state;
		return (
			<Container>
				<Input
					type="password"
					name="old-password"
					label="Old Password: "
					value={oldPassword}
					onChange={e => this.setState({ oldPassword: e.target.value })}
				/>
				<Input
					type="password"
					name="new-password"
					label="New Password: "
					value={newPassword}
					onChange={e => this.setState({ newPassword: e.target.value })}
				/>
				<Input
					type="password"
					name="confirm-password"
					label="Confirm Password: "
					value={confirmPassword}
					onChange={e => this.setState({ confirmPassword: e.target.value })}
				/>
			</Container>
		);
	}

	render() {
		return (
			<Card>
				<Header>
					<Title type="h1" title="Profile - User 1" />
					<Button type="success" label="Save" onClick={() => alert('Saved')} />
				</Header>
				{this.renderSettings()}
				{this.renderPassword()}
			</Card>
		);
	}
}

export default Profile;
