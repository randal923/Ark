import React from 'react';

import { Container } from './styles';

const Header = ({ handleLogOut }) => {
	return (
		<Container>
			<a href="/">Store</a>
			<span onClick={() => handleLogOut()}>Log Out</span>
		</Container>
	);
};

export default Header;
