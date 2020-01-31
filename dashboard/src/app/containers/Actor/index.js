import React, { Component } from 'react';

import { Container, Header } from './styles';

import moment from 'moment';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Dynamic from '../../components/Input/Dynamic';
import Pagination from '../../components/Pagination';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import General from '../../components/Alerts/General';

import { connect } from 'react-redux';
import * as actions from '../../actions/actors';

class Actor extends Component {
	generateActorState = props => {
		return {
			name: props.actor ? props.actor.name : '',
		};
	};

	constructor(props) {
		super();
		this.state = {
			...this.generateActorState(props),
			errors: {},
			warning: null,
			offset: 0,
			limit: 5,
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		if (!id) return null;
		this.props.getActor(id);
	}

	componentDidUpdate(prevProps) {
		if (
			(!prevProps.actor && this.props.actor) ||
			(prevProps.actor && this.props.actor && prevProps.actor.updatedAt !== this.props.actor.updatedAt)
		) {
			this.setState(this.generateActorState(this.props));
		}
	}

	componentWillUnmount() {
		this.props.cleanActor();
	}

	handleSubmit = (field, value) => {
		this.setState({ [field]: value });
	};

	saveActor() {
		const { actor } = this.props;
		if (!actor) return null;
		if (!this.validate()) return null;
		this.props.updateActor(this.state, actor._id, error => {
			this.setState({ warning: { status: !error, msg: error ? error.message : 'Actor updated successfully' } });
		});
	}

	removeActor() {
		const { actor } = this.props;
		if (!actor) return null;

		if (!window.confirm('Do you really want to remove this actor?')) return;

		this.props.removeActor(actor._id, error => {
			this.setState({
				warning: { status: !error, msg: error ? error.message : 'Actor removed successfully' },
			});
		});
	}

	onChangeInput = (field, value) => {
		this.setState({ [field]: value }, () => this.validate());
	};

	changeCurrentPageNumber = offset => this.setState({ offset }, () => this.getMoviesGenre(this.props));

	validate() {
		const { name } = this.state;
		const errors = {};
		if (!name) errors.name = "Name can't be blank";

		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}
	render() {
		const { name, errors } = this.state;
		const { actor } = this.props;
		const data = [];

		(actor ? actor.movies : []).forEach(item => {
			data.push({
				Movie: item.title,
				Price: item.price,
				Date: moment(item.createdAt).format('MM/DD/YYYY'),
				Action: `/movie/${item._id}`,
			});
		});

		return (
			<Card>
				<Header>
					<Dynamic
						name="Name"
						error={errors.name}
						value={name}
						handleSubmit={value => this.onChangeInput('name', value)}
					/>
					<Button type="success" onClick={() => this.saveActor()} label={'Save'} />
					<Button type="danger" onClick={() => this.removeActor()} label={'Remove'} />
				</Header>
				<General warning={this.state.warning} />
				<Container>
					<Search
						value={this.state.search}
						placeHolder={"Search by movies's name"}
						onChange={e => this.onChangeSearch(e)}
						onClick={() => alert('Search')}
					/>
					<br />
					<Table
						header={['Movie', 'Price', 'Date', 'Action']}
						data={data}
						buttonType={'ark'}
						buttonLabel={'View'}
					/>

					<Pagination
						offset={this.state.currentPageNumber}
						total={this.props.genreMovies ? this.props.genreMovies.total : 0}
						limit={this.state.limit}
						onClick={currentPageNumber => this.changeCurrentPageNumber(currentPageNumber)}
					/>
				</Container>
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	actor: state.actors.actor,
});

export default connect(mapStateToProps, actions)(Actor);
