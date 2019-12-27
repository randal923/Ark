import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Images } from './styles';

import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import ImageBlock from '../../components/Images/Block';

class Movie extends Component {
	state = {
		name: 'Movie 1',
		description: 'this is a description',
		images: [
			'https://dummyimage.com/100x100/000/fff.jpg',
			'https://dummyimage.com/100x100/000/fff.jpg',
			'https://dummyimage.com/100x100/000/fff.jpg',
		],
	};

	renderContent() {
		const { name, description } = this.state;
		return (
			<Container>
				<Link to="/reviews/ahdASYD7">Reviews</Link>
				<InfoTable
					name="Name"
					value={<Dynamic value={name} name="name" onChange={e => this.setState({ name: e.target.value })} />}
				/>
				<InfoTable
					name="Description"
					value={
						<textarea
							name="description"
							onChange={e => this.setState({ description: e.target.value })}
							value={description}
							rows="5"
							style={{ resize: 'none' }}
						/>
					}
				/>
			</Container>
		);
	}

	onRemove = id => {
		const { images } = this.state;
		this.setState({ images: images.filter((id, index) => index !== id) });
	};
	renderImages() {
		const { images } = this.state;
		return (
			<Images>
				<ImageBlock images={images} handleSubmit={() => alert('Saved')} onRemove={this.onRemove} />
			</Images>
		);
	}

	render() {
		return (
			<Card>
				<Header>
					<Title type="h1" title="Movie" />
					<Button type="success" label="Save" onClick={() => alert('Saved')} />
				</Header>
				{this.renderContent()}
				{this.renderImages()}
			</Card>
		);
	}
}

export default Movie;
