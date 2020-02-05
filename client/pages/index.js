import React, { Component } from 'react';

import Layout from '../containers/Layout';

// Styles
import GlobalStyle from '../global/styles';

import Header from '../containers/Header';
// import Banners from '../components/Header';
// import Benificios from '../components/Header';
// import InitialPage from '../components/Header';
// import Footer from '../components/Footer';

class Index extends Component {
	render() {
		return (
			<>
				<Layout title="Ark - Find Everything">
					<Header />
					{/* <Banners />
					<Benificios />
					<InitialPage />
					<Footer /> */}
				</Layout>
				<GlobalStyle />
			</>
		);
	}
}

export default Index;
