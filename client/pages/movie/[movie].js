import React, { Component } from 'react';

import Layout from '../../containers/Layout';
import Header from '../../containers/Header';
import MovieDetails from '../../containers/MovieDetails';
import Footer from '../../containers/Footer';

class Movie extends Component {
	render() {
		return (
			<Layout title="Movie Name | Ark - Find Everything">
				<Header />
				<MovieDetails />
				<Footer />
			</Layout>
		);
	}
}

export default Movie;
