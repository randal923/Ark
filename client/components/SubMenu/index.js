import React from 'react';
import Link from 'next/link';

// Components
import Input from '../Input';
import Logo from '../Logo';

// Icons
import { MdSearch, MdReorder, MdKeyboardArrowDown } from 'react-icons/md';

// Style
import { Container, Search, Menu } from './styles';

const SubMenu = () => {
	return (
		<Container>
			<MdReorder size={25} />
			<Menu>
				<Link href="/">
					<a>Home</a>
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
					<a>Short Films</a>
				</Link>
			</Menu>
			<Search>
				<Input placeholder="Search..." />
				<button>
					<MdSearch size={25} />
				</button>
			</Search>
		</Container>
	);
};

export default SubMenu;
