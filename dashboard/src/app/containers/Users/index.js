import React, { Component } from 'react';
import { Container } from './styles';

import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

import { connect } from 'react-redux';
import * as actions from '../../actions/users';

class Users extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
		limit: 5,
	};

	getUsers() {
		const { currentPageNumber, limit, search } = this.state;
		const { user } = this.props;
		if (!user) return null;

		if (search) this.props.searchUsers(search, currentPageNumber, limit);
		else this.props.currentPageNumber(currentPageNumber, limit);
	}

	componentDidMount() {
		this.getUsers();
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.user && this.props.user) this.getUsers();
	}

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	render() {
		const { search } = this.state;
		const { users } = this.props;
		console.log(users);
		const data = [];

		(users ? users.docs : []).forEach(item => {
			data.push({
				User: item.name,
				'E-Mail': item.user ? item.user.email : '',
				Action: `/user/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Users" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by customer's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					<br />
					<Table
						header={['Customer', 'E-mail', 'Action']}
						data={data}
						buttonType={'ark'}
						buttonLabel={'View'}
					/>
					<Pagination
						offset={this.state.currentPageNumber}
						total={users ? users.total : 0}
						limit={this.state.limit}
						onClick={currentPageNumber => this.changeCurrentPageNumber(currentPageNumber)}
					/>
				</Container>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.auth.user,
	};
};

export default connect(mapStateToProps, actions)(Users);
