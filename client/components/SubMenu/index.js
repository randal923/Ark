import React from 'react';
import Link from 'next/link';

// Components
import Input from '../Input';

// Icons
import { MdSearch, MdReorder } from 'react-icons/md';

// Style
import { Container, Search } from './styles';

const SubMenu = () => {
	return (
		<Container>
			<MdReorder size={25} />
			<Link href="/">
				<a>Films</a>
			</Link>
			<Link href="/">
				<a>Documentaries</a>
			</Link>
			<Link href="/">
				<a>Animations</a>
			</Link>
			<Link href="/">
				<a>TV Shows</a>
			</Link>
			<Link href="/">
				<a>TV Shows</a>
			</Link>
			<Search>
				<Input placeholder="Search..." />
				<MdSearch size={20} />
			</Search>
		</Container>
	);
};

export default SubMenu;
