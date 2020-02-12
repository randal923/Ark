import React, { Component } from 'react';

import { Container } from './styles';

// Components
import About from '../../components/Footer/About';
import TradeMark from '../../components/Footer/TradeMark';

class Footer extends Component {
	render() {
		return (
			<Container>
				<About />
				<TradeMark />
			</Container>
		);
	}
}

export default Footer;
