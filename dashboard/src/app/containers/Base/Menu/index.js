import React, { Component } from 'react';

import { Container, LogoHeader } from './styles';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import ItemList from '../ItemList';

class Menu extends Component {
	render() {
		return (
			<Container>
				<LogoHeader open={this.props.open} onClick={() => this.props.toggleOpen()}>
					<img src="/ark-logo.svg" alt="Ark logo" />
					<h1>Ark</h1>
					{this.props.open ? <MdArrowForward size={30} /> : <MdArrowBack size={30} />}
				</LogoHeader>
				<ItemList open={this.props.open} history={this.props.history} />
			</Container>
		);
	}
}

export default Menu;
