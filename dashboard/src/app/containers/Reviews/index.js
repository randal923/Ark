import React, { Component } from 'react';
import moment from 'moment';
import { Container } from './styles';
import Back from '../../components/Links/Back';
import Title from '../../components/Text/Title';
import Table from '../../components/Input/Table';
import Card from '../../components/Card';

import { connect } from 'react-redux';
import * as actions from '../../actions/reviews';

class Reviews extends Component {
	getReviews(props) {
		const { movie, user } = props;

		if (!movie || !user) return null;
		this.props.getReviews(movie._id);
	}

	componentDidMount() {
		this.getReviews(this.props);
	}

	componentDidUpdate(prevProps) {
		if ((!prevProps.movie || !this.props.user) && this.props.movie) this.getReviews(this.props);
	}
	render() {
		const { reviews, movie } = this.props;

		const data = [];
		(reviews || []).forEach(item => {
			data.push({
				User: item.name,
				Date: moment(item.createdAt).format('DD/MM/YYYY'),
				Action: `/review/${item._id}`,
			});
		});
		return (
			<Card size={'100vh'}>
				<Container>
					<Back history={this.props.history} />
					<br />
					<Title type="h2" title={`${movie ? movie.title : 'No Movie Title'}`} />
				</Container>
				<br />
				<Table header={['User', 'Date', 'Action']} data={data} buttonType={'ark'} buttonLabel={'View'} />
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.auth.user,
		reviews: state.review.reviews,
		movie: state.movie.movie,
	};
};

export default connect(mapStateToProps, actions)(Reviews);
