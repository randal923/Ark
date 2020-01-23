import React, { Component } from 'react';
import { Container } from './styles';

import { Link } from 'react-router-dom';
import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

import { MdAdd } from 'react-icons/md';

import { connect } from 'react-redux';
import * as actions from '../../actions/genres';

class Directors extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	getGenres() {
		this.props.getGenres();
	}

	componentDidMount() {
		this.getGenres();
	}

	renderNewGenre() {
		return (
			<Link to="/genres/new">
				<MdAdd size={20} />
				<span>&nbsp; New Genre</span>
			</Link>
		);
	}

	render() {
		const { genres } = this.props;
		const data = [];

		(genres || []).forEach(item => {
			data.push({
				Genre: item.name,
				Quantity: item.movies.length,
				Action: `/genre/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Genres" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by genres's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					{this.renderNewGenre()}
					<br />
					<Table
						header={['Genre', 'Quantity', 'Action']}
						data={data}
						buttonType={'ark'}
						buttonLabel={'View'}
					/>
					<Pagination
						offset={this.state.currentPageNumber}
						total={25}
						limit={5}
						onClick={currentPageNumber => this.changeCurrentPageNumber(currentPageNumber)}
					/>
				</Container>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	genres: state.genre.genres,
});

export default connect(mapStateToProps, actions)(Directors);
