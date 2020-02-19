import React, { Component } from 'react';
import { UniversalPortal } from '@jesstelford/react-portal-universal';

import { Container, LogoStyle, MobileLogoStyle, MenuBurger, Burger } from './styles';

// Components
import Logo from '../../components/Logo';
import Login from '../../components/Login';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';
import MobileModal from '../../components/MobileModal';

// Icons
import { AiOutlineShopping } from 'react-icons/ai';

class Header extends Component {
	state = {
		showMobileModal: false,
	};

	handleMobileModal() {
		this.setState({ showMobileModal: !this.state.showMobileModal });
	}

	renderMobileHeader() {
		return (
			<MobileLogoStyle show={this.state.showMobileModal}>
				<MenuBurger onClick={() => this.handleMobileModal()}>
					<Burger show={this.state.showMobileModal}></Burger>
				</MenuBurger>
				<Logo />
				<AiOutlineShopping size={25} />
			</MobileLogoStyle>
		);
	}

	renderHeader() {
		return (
			<Container>
				<Login />
				<LogoStyle>
					<Logo />
					<h1>Ark</h1>
					<Menu />
				</LogoStyle>
				<SubMenu />
				{this.renderMobileHeader()}
				{this.state.showMobileModal && (
					<UniversalPortal selector="#mobileModal">
						<MobileModal />
					</UniversalPortal>
				)}
			</Container>
		);
	}

	render() {
		return this.renderHeader();
	}
}

export default Header;
