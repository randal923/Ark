import React, { Component } from 'react';

import { Container, FooterLogo, Text } from './styles';

// Components
import Logo from '../../Logo';

class TradeMark extends Component {
	render() {
		return (
			<Container>
				<Text>
					<span>© 2013 Ark Inc. Trademakrs belong to their respective owners. All rights reserved.</span>
					<span>Prices are in US Dollars, and is applicable to the entire world.</span>
				</Text>
				<FooterLogo>
					<Logo />
					<h1>Ark</h1>
				</FooterLogo>
			</Container>
		);
	}
}

export default TradeMark;
