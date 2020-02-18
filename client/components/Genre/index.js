import React, { Component } from 'react';
import Link from 'next/link';

class Genre extends Component {
	state = {
		genre: [
			{ id: 1, name: 'Fantasy' },
			{ id: 2, name: 'Action' },
			{ id: 3, name: 'Horror' },
		],
	};

	render() {
		const { genre } = this.state;

		return (
			<>
				{genre.map(genre => {
					return (
						<Link href={`/genre/${genre.name}?id=${genre.id}`} key={genre.id}>
							<a>{genre.name}</a>
						</Link>
					);
				})}
			</>
		);
	}
}

export default Genre;
