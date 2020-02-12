import React, { Component } from 'react';

import Movie from '../Movie';

import { Container } from './styles';

class Movies extends Component {
	componentDidMount() {
		let highest = 0;
		const listedMovies = document.querySelectorAll('.movie-title');

		listedMovies.forEach(function(item) {
			if (highest < item.clientHeight) highest = item.clientHeight;
		});
		listedMovies.forEach(function(item) {
			item.style.height = highest + 10 + 'px';
		});
	}

	render() {
		const { movies, moviesPerLine } = this.props;

		return (
			<Container>
				{movies.map(item => (
					<Movie item={item} key={item.id} moviesPerLine={moviesPerLine} />
				))}
			</Container>
		);
	}
}

export default Movies;
