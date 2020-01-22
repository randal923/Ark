import React, { Component } from 'react';
import { Container, Header } from './styles';

import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import Input from '../../components/Input/Input';
import General from '../../components/Alerts/General';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Profile extends Component {
	constructor(props) {
		super();
		this.state = {
			name: props.user ? props.user.name : '',
			email: props.user ? props.user.email : '',
			oldPassword: '',
			newPassword: '',
			confirmPassword: '',

			warning: null,
			errors: {},
		};
	}

	componentDidMount() {
		this.props.getUser(this.props);
	}

	componentDidUpdate(prevProps) {
		if (this.props.user && prevProps.user && this.props.user.updatedAt !== prevProps.user.updatedAt) {
			this.setState({
				name: this.props.user ? this.props.user.name : '',
				email: this.props.user ? this.props.user.name : '',
			});
		}
	}

	onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate());

	validate() {
		const { name, email, oldPassword, newPassword, confirmPassword } = this.state;
		const errors = {};

		if (!name) errors.name = "Name can't be blank";
		if (!email) errors.email = "Email can't be blank";

		if (oldPassword || newPassword || confirmPassword) {
			if (!oldPassword) errors.oldPassword = "Old password can't be blank";
			if (!newPassword) errors.newPassword = "New password can't be blank";
			if (!confirmPassword) errors.confirmPassword = "Confirm password can't be blank";

			if (newPassword !== confirmPassword) errors.confirmPassword = "Password doesn't match.";
		}

		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}

	updateUser() {
		if (!this.validate) return null;
		const { name, email, newPassword, oldPassword } = this.state;

		const data = {};
		data.name = name;
		data.email = email;
		if (newPassword) {
			data.password = newPassword;
			data.oldPassword = oldPassword;
		}

		this.props.updateUser(data, error => {
			if (!error) this.setState({ oldPassword: '', newPassword: '', confirmPassword: '' });

			this.setState({
				warning: { status: !error, msg: error ? error.message : 'Password changed successfully.' },
			});
		});
	}

	renderSettings() {
		const { name, email, errors } = this.state;
		return (
			<Container>
				<InfoTable
					name="name"
					error={errors.name}
					value={
						<Dynamic name="name" value={name} handleSubmit={value => this.onChangeInput('name', value)} />
					}
				/>
				<InfoTable
					name="email"
					error={errors.email}
					value={
						<Dynamic
							name="email"
							value={email}
							handleSubmit={value => this.onChangeInput('email', value)}
						/>
					}
				/>
			</Container>
		);
	}

	renderPassword() {
		const { oldPassword, newPassword, confirmPassword, errors } = this.state;
		return (
			<Container>
				<Input
					type="password"
					error={errors.oldPassword}
					name="old-password"
					label="Old Password: "
					value={oldPassword}
					onChange={e => this.onChangeInput('oldPassword', e.target.value)}
				/>
				<Input
					type="password"
					error={errors.newPassword}
					name="new-password"
					label="New Password: "
					value={newPassword}
					onChange={e => this.onChangeInput('newPassword', e.target.value)}
				/>
				<Input
					type="password"
					error={errors.confirmPassword}
					name="confirm-password"
					label="Confirm Password: "
					value={confirmPassword}
					onChange={e => this.onChangeInput('confirmPassword', e.target.value)}
				/>
			</Container>
		);
	}

	render() {
		return (
			<Card>
				<Header>
					<General warning={this.state.warning} />
					<Title type="h1" title="Profile - User 1" />
					<Button type="success" label="Save" onClick={() => this.updateUser()} />
				</Header>
				{this.renderSettings()}
				{this.renderPassword()}
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, actions)(Profile);
