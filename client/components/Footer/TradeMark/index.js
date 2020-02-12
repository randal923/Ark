import React, { Component } from 'react';

// Components
import Logo from '../../Logo';

class TradeMark extends Component {
	render() {
		return (
			<>
				<span>© 2013 Ark Inc. Trademakrs belong to their respective owners. All rights reserved.</span>
				<span>Prices are in US Dollars, and is applicable to the entire world.</span>
				<Logo />
			</>
		);
	}
}

export default TradeMark;
