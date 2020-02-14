import React, { Component } from 'react';
import Link from 'next/link';

// Components
import Title from '../Title';
import Button from '../Button';

// Styles
import { Container, Star, Header, Info, Cast, Details, Links } from './styles';
import { MdStar } from 'react-icons/md';

const IMAGES = ['/movies/harry_potter.jpg'];

class Hero extends Component {
	state = {
		img: IMAGES[0],
	};
	renderImage() {
		return (
			<>
				<img src={this.state.img} />
			</>
		);
	}

	renderDetails() {
		return (
			<>
				<Header>
					<Title type="h1" title="Harry Potter" />
					<span>1953</span>
					<Star>
						<MdStar size={63} />
						<span>9.5</span>
					</Star>
					<Links>
						<Link href="/">Trailers</Link>
						<Link href="/">Extras</Link>
						<Link href="/">Reviews</Link>
						<Link href="/">Community</Link>
					</Links>
				</Header>
				<Info>
					<span>PG</span>
					<span>111 Minutes - </span>
					<span>Drama - </span>
					<span>January 31 1523 - </span>
					<span>USA</span>
				</Info>
				<p>
					A jaded nightclub owner in war-torn Casablanca, whose loyalties are put to the test when his old
					flame, Ingrid Bergman, reappears to seek Rick's help in escaping from the Nazis.
				</p>
				<Cast>
					<span>Starring: Harry Potter</span>
					<span>Directors: Harry Potter</span>
					<span>Writers: Harry Potter</span>
					<span>Subtitles: Harry Potter</span>
				</Cast>
			</>
		);
	}

	renderPaymentSection() {
		return (
			<>
				<Button type="ark" label="Buy for US$ 15.99" />
				<Button type="ark" label="Rent for US$ 15.99" />
				<span>30 days rental period</span>
			</>
		);
	}

	render() {
		return (
			<Container>
				{this.renderImage()}
				<Details>
					{this.renderDetails()}
					{this.renderPaymentSection()}
				</Details>
			</Container>
		);
	}
}

export default Hero;
