import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from './styles';

import Card from '../../components/Card';
import Title from '../../components/Text/Title';
import Button from '../../components/Button';

class Review extends Component {
	render() {
		return (
			<Card>
				<Link to="/reviews/:id">Back</Link>
				<Header>
					<Title type="h1" title="Review - Movie 1" />
					<Title type="h2" title="User - User 1" />
					<Button type="danger" onClick={() => alert('Deleted')} label={'Remove'} />
				</Header>
				<Container>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Container>
			</Card>
		);
	}
}

export default Review;
