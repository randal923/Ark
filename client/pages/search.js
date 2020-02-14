import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Header from '../containers/Header';
import MovieSearch from '../containers/MovieSearch';
import Footer from '../containers/Footer';

class Search extends Component {
	render() {
		return (
			<Layout title="Results for Fantasy | Ark - Find Everything">
				<Header />
				<MovieSearch />
				<Footer />
			</Layout>
		);
	}
}

export default Search;
