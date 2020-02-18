import React, { Component } from 'react';
import Link from 'next/link';

// Style
import { Container, Content, BackDrop } from './styles';

const MobileModal = props => {
	return (
		<Container>
			<BackDrop onClick={() => props.handleMobileModal()} />
			<Content>
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
		</Container>
	);
};

export default MobileModal;
