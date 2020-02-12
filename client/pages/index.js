import React, { Component } from 'react';

import Layout from '../containers/Layout';

// Styles
import GlobalStyle from '../global/styles';

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
				<GlobalStyle />
			</>
		);
	}
}

export default Index;
