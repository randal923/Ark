import React from 'react';
import Link from 'next/link';

// Style
import { Container } from './styles';

const Menu = () => {
	return (
		<Container>
			<Link href="/">
				<a>Store</a>
			</Link>
			<Link href="/">
				<a>Library</a>
			</Link>
			<Link href="/">
				<a>Community</a>
			</Link>
			<Link href="/">
				<a>Support</a>
			</Link>
		</Container>
	);
};

export default Menu;
