import React, { Component } from 'react';

import { Container, Banner } from './styles';

const IMAGES = ['/banners/gang_squad.jpg'];

class Banners extends Component {
	state = {
		img: IMAGES[0],
		index: 0,
	};

	onChange = index => {
		let option = index < 0 ? IMAGES.length - 1 : index >= IMAGES.length ? 0 : index;
		this.setState({ img: IMAGES[option], index: option });
	};

	componentDidMount() {
		this.scroll = window.setInterval(() => this.onChange(this.state.index + 1), 4000);
	}

	componentWillUnmount() {
		window.clearInterval(this.scroll);
	}

	renderBanners() {
		const { img } = this.state;
		return (
			<Banner>
				<img src={img} />
			</Banner>
		);
	}

	render() {
		return <Container>{this.renderBanners()}</Container>;
	}
}

export default Banners;
