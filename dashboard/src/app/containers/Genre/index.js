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
import * as actions from '../../actions/genres';

class Genre extends Component {
	generateGenreState = props => {
		return {
			name: props.genre ? props.genre.name : '',
		};
	};

	constructor(props) {
		super();
		this.state = {
			...this.generateGenreState(props),
			errors: {},
			warning: null,
			offset: 0,
			limit: 5,
		};
	}

	getMoviesGenre(props) {
		const { offset, limit } = this.state;
		const { genre } = props;
		if (!genre) return null;

		props.getMoviesGenre(genre._id, offset, limit);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		if (!id) return null;
		this.props.getGenre(id);
		this.getMoviesGenre(this.props);
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.genre && this.props.genre) this.getMoviesGenre(this.props);
		if (
			(!prevProps.genre && this.props.genre) ||
			(prevProps.genre && this.props.genre && prevProps.genre.updatedAt !== this.props.genre.updatedAt)
		) {
			this.setState(this.generateGenreState(this.props));
		}
	}

	componentWillUnmount() {
		this.props.cleanGenre();
	}

	handleSubmit = (field, value) => {
		this.setState({ [field]: value });
	};

	saveGenre() {
		const { genre } = this.props;
		if (!genre) return null;
		if (!this.validate()) return null;
		this.props.updateGenre(this.state, genre._id, error => {
			this.setState({ warning: { status: !error, msg: error ? error.message : 'Genre updated successfully' } });
		});
	}

	removeGenre() {
		const { genre } = this.props;
		if (!genre) return null;

		if (!window.confirm('Do you really want to remove this genre?')) return;

		this.props.removeGenre(genre._id, error => {
			this.setState({
				warning: { status: !error, msg: error ? error.message : 'Genre removed successfully' },
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
		const { genreMovies } = this.props;
		const data = [];

		(genreMovies ? genreMovies.docs : []).forEach(item => {
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
					<Button type="success" onClick={() => this.saveGenre()} label={'Save'} />
					<Button type="danger" onClick={() => this.removeGenre()} label={'Remove'} />
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
	genre: state.genre.genre,
	genreMovies: state.genre.genreMovies,
});

export default connect(mapStateToProps, actions)(Genre);
