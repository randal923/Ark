import React, { Component } from 'react';

// Components
import Movies from '../../components/Movies';
import Title from '../../components/Title';
import { MOVIES } from '../../utilities/movies';

// import { Container } from './styles';

class MovieSearch extends Component {
	render() {
		return (
			<>
				<Title title="Results of Fantasy" type="h2" />
				<Movies movies={MOVIES} moviesPerLine={4} />
			</>
		);
	}
}

export default MovieSearch;
