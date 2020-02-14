import React, { Component } from 'react';

import { Container } from './styles';

import Hero from '../../components/Hero';

class MovieDetails extends Component {
	render() {
		return (
			<Container>
				<Hero />
			</Container>
		);
	}
}

export default MovieDetails;
