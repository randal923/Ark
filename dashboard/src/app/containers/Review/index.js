import React, { Component } from 'react';

import { Container, Header, TextArea } from './styles';

import Card from '../../components/Card';
import Title from '../../components/Text/Title';
import Button from '../../components/Button';
import General from '../../components/Alerts/General';
import Back from '../../components/Links/Back';

import { connect } from 'react-redux';
import * as actions from '../../actions/reviews';

class Review extends Component {
	state = {
		warning: null,
	};

	getReview(props) {
		const { user, movie } = props;
		if (!user || !movie) return;

		const { id: review } = props.match.params;

		this.props.getReview(review, movie._id);
	}

	componentDidMount() {
		this.getReview(this.props);
	}

	componentDidUpdate(prevProps) {
		if ((!prevProps.movie || !this.props.user) && this.props.movie) this.getReview(this.props);
	}

	componentWillUnmount() {
		this.props.cleanReview();
	}

	removeReview() {
		const { user, movie, review } = this.props;
		if (!user || !movie || !review) return null;

		if (window.confirm('Would you really like to remove this review?')) {
			this.props.removeReview(review._id, movie._id, error => {
				if (error) return this.setState({ warning: { status: false, msg: error.message } });
				else this.props.history.goBack();
			});
		}
	}
	render() {
		const { review, movie, user } = this.props;

		return (
			<Card>
				<General wanring={this.state.warning} />
				<Header>
					<Back history={this.props.history} />
					<Button type="danger" onClick={() => this.removeReview()} label={'Remove'} />
				</Header>
				<Container>
					<Title
						type="h1"
						title={`${user ? user.name : 'No User Name'} - ${movie ? movie.title : 'No Movie Title'}`}
					/>
					<Title type="h2" title={`Stars: ${review ? review.stars : 'No Stars'}`} />
					<TextArea>{review ? review.text : 'No Review Text'}</TextArea>
				</Container>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		review: state.review.review,
		movie: state.movie.movie,
	};
};

export default connect(mapStateToProps, actions)(Review);
