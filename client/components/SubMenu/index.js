import React, { Component } from 'react';
import Link from 'next/link';

// Components
import Search from '../Search';
import Genre from '../../components/Genre';

// Icons
import { MdReorder } from 'react-icons/md';

// Style
import { Container, Menu, DropDown, DropDownContent } from './styles';

class SubMenu extends Component {
	renderSubMenu() {
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
				<Search />
			</Container>
		);
	}
	render() {
		return <>{this.renderSubMenu()}</>;
	}
}

export default SubMenu;
