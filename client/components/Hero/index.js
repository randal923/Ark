import React, { Component } from 'react';
import Link from 'next/link';

// Components
import Title from '../Title';
import Button from '../Button';

// Styles
import { Container, Star, Header, Info, Cast, Details, Links, ButtonContainer, Payment } from './styles';
import { MdStar } from 'react-icons/md';

const IMAGES = ['/movies/Untitled-1.jpg'];

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
					<Title type="h1" title="Harry Potter and The Chamber of Secrets" />
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
					<span>111 Minutes</span> - <a href="/">Drama</a> - <a href="/">January 31 1523</a> -{' '}
					<span>USA</span>
				</Info>
				<ButtonContainer>
					<p>
						An ancient prophecy seems to be coming true when a mysterious presence begins stalking the
						corridors of a school of magic and leaving its victims paralyzed.
					</p>
					<Payment>
						<button>BUY FOR US$15.99</button>
						<button>RENT FOR US$4.99</button>
						<span>30 days rental period</span>
					</Payment>
				</ButtonContainer>
				<Cast>
					<span>
						Director: <a href="/">Chris Columbus</a>
					</span>
					<span>
						Starring:{' '}
						<a href="/">
							Daniel Radcliffe Rupert Grint Emma Watson Kenneth Branagh John Cleese Robbie Coltrane
							Warwick Davis Richard Griffiths Richard Harris Jason Isaacs Alan Rickman Fiona Shaw Maggie
							Smith Julie Walters
						</a>
					</span>
					<span>
						Writers: <a href="/">Harry Potter</a>
					</span>
					<span>
						Actors: <a href="/">Harry Potter</a>
					</span>
					<span>
						Subtitles: <a href="/">English, Portuguese, Spanish, Greek</a>
					</span>
				</Cast>
			</>
		);
	}

	render() {
		return (
			<Container>
				{this.renderImage()}
				<Details>{this.renderDetails()}</Details>
			</Container>
		);
	}
}

export default Hero;
