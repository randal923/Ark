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
import * as actorsActions from '../../actions/actors';
import * as moviesActions from '../../actions/movies';

class Actors extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	getActors() {
		this.props.getActors();
	}

	componentDidMount() {
		this.getActors();
	}

	renderNewDirector() {
		return (
			<Link to="/actors/new">
				<MdAdd size={20} />
				<span>&nbsp; New Actor</span>
			</Link>
		);
	}

	render() {
		const { actors } = this.props;
		const data = [];

		(actors || []).forEach(item => {
			data.push({
				Actors: item.name,
				Action: `/actor/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Actors" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by actors's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					{this.renderNewDirector()}
					<br />
					<Table header={['Actors', 'Action']} data={data} buttonType={'ark'} buttonLabel={'View'} />
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
	actors: state.movie.actors,
});

export default connect(mapStateToProps, { ...actorsActions, ...moviesActions })(Actors);
