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
import * as directorsActions from '../../actions/directors';
import * as moviesActions from '../../actions/movies';

class Directors extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	getDirectors() {
		this.props.getDirectors();
	}

	componentDidMount() {
		this.getDirectors();
	}

	renderNewDirector() {
		return (
			<Link to="/directors/new">
				<MdAdd size={20} />
				<span>&nbsp; New Director</span>
			</Link>
		);
	}

	render() {
		const { directors } = this.props;
		const data = [];

		(directors || []).forEach(item => {
			data.push({
				Directors: item.name,
				Action: `/director/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Directors" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by directors's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					{this.renderNewDirector()}
					<br />
					<Table header={['Directors', 'Action']} data={data} buttonType={'ark'} buttonLabel={'View'} />
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
	directors: state.movie.directors,
});

export default connect(mapStateToProps, { ...directorsActions, ...moviesActions })(Directors);
