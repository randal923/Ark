import React, { Component } from 'react';

import { Container, Header } from './styles';

import moment from 'moment';
import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import Pagination from '../../components/Pagination';
import Search from '../../components/Input/Search';
import Table from '../../components/Input/Table';
import General from '../../components/Alerts/General';

import { connect } from 'react-redux';
import * as actions from '../../actions/directors';

class Director extends Component {
	generateDirectorState = props => {
		return {
			name: props.director ? props.director.name : '',
		};
	};

	constructor(props) {
		super();
		this.state = {
			...this.generateDirectorState(props),
			errors: {},
			warning: null,
			offset: 0,
			limit: 5,
		};
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		if (!id) return null;
		this.props.getDirector(id);
	}

	componentDidUpdate(prevProps) {
		if (
			(!prevProps.director && this.props.director) ||
			(prevProps.director &&
				this.props.director &&
				prevProps.director.updatedAt !== this.props.director.updatedAt)
		) {
			this.setState(this.generateDirectorState(this.props));
		}
	}

	componentWillUnmount() {
		this.props.cleanDirector();
	}

	handleSubmit = (field, value) => {
		this.setState({ [field]: value });
	};

	saveDirector() {
		const { director } = this.props;
		if (!director) return null;
		if (!this.validate()) return null;
		this.props.updateDirector(this.state, director._id, error => {
			this.setState({
				warning: { status: !error, msg: error ? error.message : 'Director updated successfully' },
			});
		});
	}

	removeDirector() {
		const { director } = this.props;
		if (!director) return null;

		if (!window.confirm('Do you really want to remove this director?')) return;

		this.props.removeDirector(director._id, error => {
			this.setState({
				warning: { status: !error, msg: error ? error.message : 'director removed successfully' },
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
		const { director } = this.props;
		const data = [];

		(director ? director.movies : []).forEach(item => {
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
					<Title type="h1" title={name} />
					<Button type="success" onClick={() => this.saveDirector()} label={'Save'} />
					<Button type="danger" onClick={() => this.removeDirector()} label={'Remove'} />
				</Header>
				<General warning={this.state.warning} />
				<Container>
					<InfoTable
						name="Name"
						value={
							<Dynamic
								name="Name"
								error={errors.name}
								value={name}
								handleSubmit={value => this.onChangeInput('name', value)}
							/>
						}
					/>

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
	director: state.directors.director,
});

export default connect(mapStateToProps, actions)(Director);
