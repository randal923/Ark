import React, { Component } from 'react';
import { Container, NewWriter } from './styles';

import { Link } from 'react-router-dom';
import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

import { connect } from 'react-redux';
import * as writersActions from '../../actions/writers';
import * as moviesActions from '../../actions/movies';

class Writers extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	getWriters() {
		this.props.getWriters();
	}

	componentDidMount() {
		this.getWriters();
	}

	renderNewWriter() {
		return (
			<NewWriter>
				<Link to="/writers/new">New Writer</Link>
			</NewWriter>
		);
	}

	render() {
		const { writers } = this.props;
		const data = [];

		(writers || []).forEach(item => {
			data.push({
				Writers: item.name,
				Action: `/writer/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Writers" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by writer's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					{this.renderNewWriter()}
					<br />
					<Table header={['Writers', 'Action']} data={data} buttonType={'ark'} buttonLabel={'View'} />
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
	writers: state.movie.writers,
});

export default connect(mapStateToProps, { ...writersActions, ...moviesActions })(Writers);
