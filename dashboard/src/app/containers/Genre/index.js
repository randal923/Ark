import React, { Component } from 'react';

import { Container, Header } from './styles';

import moment from 'moment';
import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import Pagination from '../../components/Pagination';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';

class Genre extends Component {
	state = {
		name: 'Horror',
		search: '',
		currentPageNumber: 0,
	};

	handleSubmit = (field, value) => {
		this.setState({ [field]: value });
	};
	render() {
		const data = [
			{
				Movie: 'Movie 1',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/123512341234SAsfsdfsfd',
			},
			{
				Movie: 'Movie 2',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/12351dfgadsfafwasdvcxcvxcvxcvd',
			},
			{
				Movie: 'Movie 3',
				Price: 89.9,
				Date: moment().format('dddd, MMMM Do YYYY'),
				Action: '/movie/123512dsgfgnbvcbnDcbvcvmgmnbn',
			},
		];
		const { name } = this.state;
		return (
			<Card>
				<Header>
					<Title type="h1" title="Genre" />
					<Button type="success" onClick={() => alert('Saved')} label={'Save'} />
					<Button type="danger" onClick={() => alert('Deleted')} label={'Remove'} />
				</Header>
				<Container>
					<InfoTable
						name="Name"
						value={
							<Dynamic
								name="Name"
								value={name}
								handleSubmit={value => this.handleSubmit('name', value)}
							/>
						}
					/>

					<Search
						value={this.state.search}
						placeHolder={"Search by movies's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					<br />
					<Table
						header={['Movie', 'Price', 'Date', 'Action']}
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

export default Genre;
