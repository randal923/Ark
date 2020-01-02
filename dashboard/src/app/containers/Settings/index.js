import React, { Component } from 'react';
import { Container, Header } from './styles';

import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';

class Settings extends Component {
	state = {
		name: 'Ark',
		email: 'ark@info.com',
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

	render() {
		return (
			<Card>
				<Header>
					<Title type="h1" title="Settings" />
					<Button type="success" label="Save" onClick={() => alert('Saved')} />
				</Header>
				{this.renderSettings()}
			</Card>
		);
	}
}

export default Settings;
