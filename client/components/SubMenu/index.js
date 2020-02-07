import React from 'react';
import Link from 'next/link';

// Components
import Input from '../Input';

// Icons
import { MdSearch, MdReorder, MdKeyboardArrowDown } from 'react-icons/md';

// Style
import { Container, Search } from './styles';

const SubMenu = () => {
	return (
		<Container>
			<MdReorder size={25} />
			<Link href="/">
				<a>
					Films <MdKeyboardArrowDown />
				</a>
			</Link>
			<Link href="/">
				<a>
					Documentaries <MdKeyboardArrowDown />
				</a>
			</Link>
			<Link href="/">
				<a>
					Animations <MdKeyboardArrowDown />
				</a>
			</Link>
			<Link href="/">
				<a>
					TV Shows <MdKeyboardArrowDown />
				</a>
			</Link>
			<Link href="/">
				<a>
					TV Shows <MdKeyboardArrowDown />
				</a>
			</Link>
			<Link href="/">
				<a>
					Short Films <MdKeyboardArrowDown />
				</a>
			</Link>
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
