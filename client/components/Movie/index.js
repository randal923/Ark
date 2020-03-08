import React, { Component } from 'react';
import Link from 'next/link';
import { baseImg } from '../../config';

const formatMoney = value => 'US$ ' + (value || 0).toFixed(2);

// Style
import { Container, MovieItem, Title, Price } from './styles';

class Movie extends Component {
	render() {
		const { item, moviesPerLine } = this.props;
		const { id, title, price, salePrice, images } = item;
		const sale = salePrice && price !== salePrice;

		return (
			<Container moviesPerLine={moviesPerLine}>
				<MovieItem>
					<Link href={`/movie/${title}?movie=${id}`}>
						<a>
							<img src={images[0]} alt={title} />
						</a>
					</Link>
					<Title>
						<h4>{title}</h4>
					</Title>
					<Price>
						<h4>{formatMoney(price)}</h4>
					</Price>
				</MovieItem>
			</Container>
		);
	}
}

export default Movie;
