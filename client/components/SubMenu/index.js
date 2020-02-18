import React, { Component } from 'react';
import Link from 'next/link';
import { UniversalPortal } from '@jesstelford/react-portal-universal';

// Components
import Input from '../Input';
import Genre from '../../components/Genre';
import MobileModal from '../MobileModal';

// Icons
import { MdSearch, MdReorder } from 'react-icons/md';

// Style
import { Container, Search, Menu, DropDown, DropDownContent, MobileSubMenu } from './styles';

class SubMenu extends Component {
	state = {
		showMobileModal: false,
	};

	handleMobileModal() {
		this.setState({ showMobileModal: !this.state.showMobileModal });
	}
	renderMobileSubMenu() {
		return (
			<MobileSubMenu>
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
			</MobileSubMenu>
		);
	}

	renderSubMenu() {
		return (
			<Container>
				<MdReorder size={25} onClick={() => this.setState({ showMobileModal: !this.state.showMobileModal })} />

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
	}
	render() {
		return (
			<>
				{this.renderSubMenu()}
				{this.renderMobileSubMenu()}
				{this.state.showMobileModal && (
					<UniversalPortal selector="#mobileModal">
						<MobileModal handleMobileModal={() => this.handleMobileModal()} />
					</UniversalPortal>
				)}
			</>
		);
	}
}

export default SubMenu;
