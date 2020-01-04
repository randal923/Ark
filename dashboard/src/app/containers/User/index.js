import React, { Component } from 'react';

import { Container, Header } from './styles';

import Card from '../../components/Card';
import Title from '../../components/Text/Title';
import Button from '../../components/Button';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import OrdersUser from './OrdersUser';

import { connect } from 'react-redux';
import * as actions from '../../actions/users';
import General from '../../components/Alerts/General';

class User extends Component {
	generateStateUser = props => ({
		name: props.user ? props.user.name : '',
		email: props.user ? props.user.email : '',
	});

	constructor(props) {
		super();
		this.state = {
			...this.generateStateUser(props),
			warning: null,
			errors: {},
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getUser(id);
	}
	cleanAlert = () => this.setState({ warning: null });

	componentDidUpdate(prevProps) {
		if (
			(!prevProps.user && this.props.user) ||
			(prevProps.user && this.props.user && prevProps.user.updatedAt !== this.props.user.updatedAt)
		)
			this.setState(this.generateStateUser(this.props));
	}

	componentWillUnmount() {
		this.props.cleanUser();
	}

	handleSubmit = (field, value) => {
		this.setState({ [field]: value }, () => this.validate());
	};

	validate() {
		const { name, email } = this.state;
		const errors = {};

		if (!name) errors.name = 'Name cannot be blank';
		if (!email) errors.email = 'Email cannot be blank';

		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}

	saveUser() {
		this.cleanAlert();
		const { user } = this.props;
		if (!user) return null;
		if (!this.validate()) return null;
		this.props.updateUser(this.state, user._id, error => {
			this.setState({
				warning: {
					status: !error,
					msg: error ? error.message : 'User updated successfully!',
				},
			});
		});
	}

	removeUser() {
		this.cleanAlert();
		const { user } = this.props;
		if (!user) return null;

		if (window.confirm('Would you really like to remove this user?')) {
			this.props.removeUser(user._id, error => {
				this.setState({
					warning: {
						status: !error,
						msg: error ? error.message : 'User removed successfully!',
					},
				});
			});
		}
	}

	render() {
		const { name, email } = this.state;
		const { user } = this.props;
		return (
			<Card>
				<Header>
					<Title type="h1" title={name} />
					{user && user.deleted ? (
						<Button type="success" label={'Removed'} />
					) : (
						<>
							<Button type="success" onClick={() => this.saveUser()} label={'Save'} />
							<Button type="danger" onClick={() => this.removeUser()} label={'Remove'} />
						</>
					)}
				</Header>
				<Container>
					<General warning={this.state.warning} />
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
				</Container>
				<OrdersUser />
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user.user,
});

export default connect(mapStateToProps, actions)(User);
