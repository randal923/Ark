import React, { Component } from 'react';

import { Container, Header } from './styles';

import Card from '../../components/Card';
import Title from '../../components/Text/Title';
import Button from '../../components/Button';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import OrdersUser from './OrdersUser';

class User extends Component {
	state = {
		name: 'User 1',
		email: 'user1@hotmail.com',
		dateOfBirth: '10/01/1995',
	};

	handleSubmit = (field, value) => {
		this.setState({ [field]: value });
	};

	render() {
		const { name, email, dateOfBirth } = this.state;
		return (
			<Card>
				<Header>
					<Title type="h1" title={name} />
					<Button type="success" onClick={() => alert('Saved')} label={'Save'} />
					<Button type="danger" onClick={() => alert('Deleted')} label={'Remove'} />
				</Header>
				<Container>
					<InfoTable
						name="Name"
						value={
							<Dynamic
								name="Name"
								value={name}
								handleSubmit={value => this.handleSubmit('name', value)}
							/>
						}
					/>
					<InfoTable
						name="E-mail"
						value={
							<Dynamic
								name="email"
								value={email}
								handleSubmit={value => this.handleSubmit('email', value)}
							/>
						}
					/>
					<InfoTable
						name="Date of Birth"
						value={
							<Dynamic
								name="dateOfBirth"
								value={dateOfBirth}
								handleSubmit={value => this.handleSubmit('dateOfBirth', value)}
							/>
						}
					/>
				</Container>
				<OrdersUser />
			</Card>
		);
	}
}

export default User;
