import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getCookie } from '../../utilities/cookie';

const NoAuth = Component => {
	class ComponentNoAuth extends React.Component {
		componentDidMount() {
			const { getUser, authorized, history, user } = this.props;
			if (getCookie('user')) getUser();
			if (authorized && user.role.includes('admin')) history.replace('/');
		}

		componentDidUpdate(prevProps) {
			const { authorized, history } = prevProps;
			if (!authorized && this.props.authorized && this.props.user.role.includes('admin')) history.replace('/');
		}

		render() {
			return (
				<>
					<Component {...this.props} />
				</>
			);
		}
	}

	const mapStateToProps = state => {
		return { authorized: state.auth.authorized, user: state.auth.user };
	};

	return connect(mapStateToProps, actions)(ComponentNoAuth);
};

export default NoAuth;
