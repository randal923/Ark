import React from 'react';
import Link from 'next/link';

// Components
import Input from '../Input';
import Genre from '../../components/Genre';

// Icons
import { MdSearch, MdReorder, MdKeyboardArrowDown } from 'react-icons/md';

// Style
import { Container, Search, Menu, DropDown, DropDownContent } from './styles';

const SubMenu = () => {
	return (
		<Container>
			<MdReorder size={25} />
			<Menu>
				<DropDown>
					<Link href="/">
						<a>Movies</a>
					</Link>
					<DropDownContent className="dropdown-content">
						<div>
							<Genre />
						</div>
					</DropDownContent>
				</DropDown>
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
