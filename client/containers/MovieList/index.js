import React, { Component } from 'react';

// Components
import Movies from '../../components/Movies';
import Title from '../../components/Title';

import { Container } from './styles';

const MOVIES = [
	{
		id: 1231495333,
		images: ['/movies/harry_potter.jpg'],
		title: "Harry Potter and the Philosopher's Stone",
		genre: ['Fantasy'],
		price: 15.99,
		sale: 14.99,
	},
	{
		id: 4234234222,
		images: ['/movies/io.jpg'],
		title: 'IO',
		genre: ['Fantasy'],
		price: 15.99,
		sale: 14.99,
	},
	{
		id: 1245645623,
		images: ['/movies/matrix.jpg'],
		title: 'The Matrix',
		genre: ['Fantasy', 'Action'],
		price: 15.99,
		sale: 14.99,
	},
];
class MovieList extends Component {
	render() {
		return (
			<Container>
				<Title title="Fantasy Movies" type="h2" />
				<Movies movies={MOVIES} moviesPerLine={4} />
			</Container>
		);
	}
}

export default MovieList;
