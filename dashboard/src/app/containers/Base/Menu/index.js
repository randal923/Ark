import React, { Component } from 'react';

import { Container } from './styles';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import ItemList from '../ItemList';

class Menu extends Component {
	state = {
		open: true,
	};

	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		return (
			<Container>
				<span onClick={() => this.toggleOpen()}>
					{open ? <MdArrowForward size={24} /> : <MdArrowBack size={24} />}
				</span>
				<ItemList open={open} history={this.props.history} />
			</Container>
		);
	}
}

export default Menu;
