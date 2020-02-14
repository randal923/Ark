import React, { Component } from 'react';

import Layout from '../../containers/Layout';
import Header from '../../containers/Header';
import Banners from '../../containers/Banners';
import MovieGenre from '../../containers/MovieGenre';
import Footer from '../../containers/Footer';

class Genre extends Component {
	render() {
		return (
			<Layout title="Fantasy | Ark - Find Everything">
				<Header />
				<Banners />
				<MovieGenre />
				<Footer />
			</Layout>
		);
	}
}

export default Genre;
