import React, { Component } from 'react';
import { Container, OrderBy, Order } from './styles';

import moment from 'moment';
import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

import { Link } from 'react-router-dom';
import * as actions from '../../actions/movies';
import { connect } from 'react-redux';

class Movies extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
		offset: 0,
		limit: 10,
		order: 'alphabetical_a-z',
	};

	getMovies(props) {
		const { offset, limit, search, order } = this.state;
		if (search) props.getMoviesSearch(search, order, offset, limit);
		else props.getMovies(order, offset, limit);
	}

	componentDidMount() {
		this.getMovies(this.props);
	}

	onChangeSearch = e => this.setState({ search: e.target.value }, () => this.handleSearchSubmit());

	changeCurrentPageNumber = currentPageNumber =>
		this.setState({ currentPageNumber }, () => this.getMovies(this.props));

	handleSearchSubmit() {
		this.setState({ offset: 0 }, () => {
			this.getMovies(this.props);
		});
	}

	changeOrder = e => this.setState({ order: e.target.value }, () => this.getMovies(this.props));

	render() {
		const { search, order } = this.state;
		const { movies } = this.props;

		const data = [];

		(movies ? movies.docs : []).forEach(item => {
			data.push({
				Movie: item.title,
				Genre: item.genre ? item.genre.name : '',
				Price: item.price,
				Date: moment(item.releaseDate).format('dddd, MMMM Do YYYY'),
				Action: `/movie/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Orders" />
					<br />
					<Search
						value={search}
						placeHolder={"Search by movies's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => this.handleSearchSubmit()}
					/>
					<Order>
						<Link to="/movies/new">New Movie</Link>
						<OrderBy>
							<select value={order} onChange={this.changeOrder}>
								<option>Random</option>
								<option value={'alphabetical_a-z'}>Alphabetical A-Z</option>
								<option value={'alphabetical_z-a'}>Alphabetical Z-A</option>
								<option value={'lowest-to-highest'}>Price Low-High</option>
								<option value={'highest-to-lowest'}>Price High-Low</option>
							</select>
						</OrderBy>
					</Order>
					<br />
					<Table
						header={['Movie', 'Genre', 'Price', 'Date', 'Action']}
						data={data}
						buttonType={'ark'}
						buttonLabel={'View'}
					/>
					<Pagination
						offset={this.state.currentPageNumber}
						total={this.props.movies ? this.props.movies.total : 0}
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
		movies: state.movie.movies,
	};
};

export default connect(mapStateToProps, actions)(Movies);
