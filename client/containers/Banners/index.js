import React, { Component } from 'react';
import Link from 'next/link';

import { Container, Banner } from './styles';

import { MOVIES } from '../../utilities/movies';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

class Banners extends Component {
	state = {
		index: 0,
	};

	handleBannerClick() {
		const { index } = this.state;

		if (index < MOVIES.length - 1) {
			this.setState({ index: index + 1 });
		} else {
			this.setState({ index: 0 });
		}
	}

	render() {
		const { index } = this.state;
		return (
			<Container>
				<Banner>
					<MdKeyboardArrowLeft size={45} onClick={() => this.handleBannerClick()} />
					<Link href={`/movie/${MOVIES[index].title}?movie=${MOVIES[index].id}`}>
						<a>
							<img src={MOVIES[index].banner} />
						</a>
					</Link>
					<MdKeyboardArrowRight size={45} onClick={() => this.handleBannerClick()} />
				</Banner>
			</Container>
		);
	}
}

export default Banners;
