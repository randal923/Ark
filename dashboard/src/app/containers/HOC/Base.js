import React from 'react';
import Base from '../Base';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getCookie } from '../../utilities/cookie';

const base = Component => {
	class BaseComponent extends React.Component {
		componentDidMount() {
			const { getUser, authorized, history, user } = this.props;
			if (getCookie('user')) getUser();
			if (!authorized || !user || !user.role.includes('admin')) history.replace('/login');
		}

		componentDidUpdate(prevProps) {
			const { history, authorized, user } = this.props;
			if (!authorized || !user || !user.role.includes('admin')) history.replace('/login');
		}

		render() {
			return (
				<Base history={this.props.history}>
					<Component {...this.props} />
				</Base>
			);
		}
	}

	const mapStateToProps = state => {
		return { authorized: state.auth.authorized, user: state.auth.user };
	};

	return connect(mapStateToProps, actions)(BaseComponent);
};

export default base;
