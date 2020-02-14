import React, { Component } from 'react';

import Layout from '../containers/Layout';

import Header from '../containers/Header';
import Banners from '../containers/Banners';
import Movies from '../containers/MovieList';
import Footer from '../containers/Footer';

class Index extends Component {
	render() {
		return (
			<>
				<Layout title="Ark - Find Everything">
					<Header />
					<Banners />
					<Movies />
					<Footer />
				</Layout>
			</>
		);
	}
}

export default Index;
