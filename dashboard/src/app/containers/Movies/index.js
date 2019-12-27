import React, { Component } from 'react';
import { Container, OrderBy } from './styles';

import moment from 'moment';
import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

class Movies extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	render() {
		const data = [
			{
				Movie: 'Movie 1',
				Genre: 'Horror',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/123512341234SAsfsdfsfd',
			},
			{
				Movie: 'Movie 2',
				Genre: 'Fantasy',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/12351dfgadsfafwasdvcxcvxcvxcvd',
			},
			{
				Movie: 'Movie 3',
				Genre: 'Action',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/123512dsgfgnbvcbnDcbvcvmgmnbn',
			},
			{
				Movie: 'Movie 4',
				Genre: 'Horror',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/12asdsdczxcADA123141231231231',
			},
			{
				Movie: 'Movie 4',
				Genre: 'Horror',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/12asdsdczxcADA123141231231231',
			},
		];
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Orders" />
					<br />
					<Search
						value={this.state.search}
						placeHolder={"Search by movies's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					<OrderBy>
						<label>
							<small>Order By:</small>
						</label>
						<select defaultValue="">
							<option>Random</option>
							<option value={'oaA-Z'}>Alphabetical A-Z</option>
							<option value={'oaZ-A'}>Alphabetical Z-A</option>
							<option value={'price-low'}>Price High</option>
							<option value={'price-high'}>Price Low</option>
						</select>
					</OrderBy>
					<br />
					<Table
						header={['Movie', 'Genre', 'Price', 'Date', 'Action']}
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

export default Movies;
