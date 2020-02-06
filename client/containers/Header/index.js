import React, { Component } from 'react';

import { Container, LogoStyle } from './styles';

import Logo from '../../components/Logo';
import Login from '../../components/Login';
import Menu from '../../components/Menu';
import SubMenu from '../../components/SubMenu';

class Header extends Component {
	renderSimpleHeader() {
		return (
			<>
				<Logo />
			</>
		);
	}

	renderHeader() {
		return (
			<Container>
				<LogoStyle>
					<Logo />
					<h1>Ark</h1>
					<Menu />
				</LogoStyle>
				<Login />
				<SubMenu />
			</Container>
		);
	}

	render() {
		const { simple } = this.props;
		return simple ? this.renderSimpleHeader() : this.renderHeader();
	}
}

export default Header;
