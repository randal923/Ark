import React, { Component } from 'react';

// Components
import Movies from '../../components/Movies';
import Title from '../../components/Title';
import { MOVIES } from '../../utilities/movies';

import { Container } from './styles';

class MovieList extends Component {
	render() {
		return (
			<Container>
				<Title title="Action Movies" type="h2" />
				<Movies movies={MOVIES} moviesPerLine={4} />
			</Container>
		);
	}
}

export default MovieList;
