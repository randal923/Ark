import React from 'react';
import Link from 'next/link';

// Components
import Search from '../Search';

// Style
import { Content } from './styles';

const MobileModal = () => {
	return (
		<Content>
			<Search />
			<Link href="/">
				<a>Login</a>
			</Link>
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
		</Content>
	);
};

export default MobileModal;
