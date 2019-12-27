import React, { Component } from 'react';
import { Container } from './styles';

import Title from '../../components/Text/Title';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import Pagination from '../../components/Pagination';
import Card from '../../components/Card';

class Genres extends Component {
	state = {
		search: '',
		currentPageNumber: 0,
	};

	onChangeSearch = e => this.setState({ search: e.target.value });

	changeCurrentPageNumber = currentPageNumber => this.setState({ currentPageNumber });

	render() {
		const data = [
			{
				Genre: 'Fantasy',
				Quantity: 20,
				Action: '/genre/fantasy',
			},
			{
				Genre: 'Horror',
				Quantity: 2,
				Action: '/genre/horror',
			},
			{
				Genre: 'Action',
				Quantity: 350,
				Action: '/genre/action',
			},
		];
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

export default Genres;
