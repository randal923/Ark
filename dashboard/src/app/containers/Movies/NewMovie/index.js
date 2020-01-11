import React, { Component } from 'react';
import { Container, Header, Data, DropDown } from './styles';
import Select from 'react-select';

import Title from '../../../components/Text/Title';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Input from '../../../components/Input/Input';
import General from '../../../components/Alerts/General';

import { connect } from 'react-redux';
import * as actions from '../../../actions/movies';

class NewMovie extends Component {
	state = {
		title: '',
		releasedate: '',
		duration: '',
		country: [],
		subtitles: [],
		price: 0,
		description: '',
		directors: [],
		genre: [],
		actors: [],
		writers: [],
		errors: {},
		warning: null,
	};

	getCast() {
		this.props.getDirectors();
		this.props.getActors();
		this.props.getWriters();
		this.props.getMovieGenres();
	}

	componentDidMount() {
		this.getCast();
	}

	validate() {
		const { title, releasedate, duration, price, description, directors, genre, actors, writers } = this.state;
		const errors = {};
		if (!title) errors.title = 'title cannot be blank';
		if (!releasedate) errors.releasedate = 'releasedate cannot be blank';
		if (!duration) errors.duration = 'duration cannot be blank';
		if (!price) errors.price = 'price cannot be blank';
		if (!description) errors.description = 'description cannot be blank';
		if (!directors) errors.directors = 'directors cannot be blank';
		if (!genre) errors.genre = 'genre cannot be blank';
		if (!actors) errors.actors = 'actors cannot be blank';
		if (!writers) errors.writers = 'writers cannot be blank';

		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}

	renderHeader() {
		const { title } = this.state;

		return (
			<Header>
				<Title type="h1" title={title || 'New Genre'} />
				<Button label="Save" type="success" onClick={() => this.createMovie()} />
			</Header>
		);
	}

	createMovie() {
		if (!this.validate()) return null;
		this.props.createMovie(this.state, error => {
			this.setState({
				warning: {
					status: !error,
					msg: error ? error.message : 'New movie created successfully',
				},
			});
		});
	}

	addDirectorsToState = directors => {
		this.setState({ directors });
	};

	addActorsToState = actors => {
		this.setState({ actors });
	};
	addWritersToState = writers => {
		this.setState({ writers });
	};
	addMovieGenresToState = movieGenres => {
		this.setState({ genre: movieGenres });
	};

	renderDropDown() {
		const { directors, actors, writers, movieGenres } = this.props;
		return (
			<DropDown>
				<Select
					placeholder="Select Director"
					options={(directors ? directors : []).map(item => ({
						value: item._id,
						label: item.name,
					}))}
					onChange={this.addDirectorsToState}
					value={this.state.directors}
					isMulti
				/>
				<Select
					placeholder="Select Actor"
					options={(actors ? actors : []).map(item => ({
						value: item._id,
						label: item.name,
					}))}
					onChange={this.addActorsToState}
					value={this.state.actors}
					isMulti
				/>
				<Select
					placeholder="Select Writer"
					options={(writers ? writers : []).map(item => ({
						value: item._id,
						label: item.name,
					}))}
					onChange={this.addWritersToState}
					value={this.state.writers}
					isMulti
				/>
				<Select
					placeholder="Select Genre"
					options={(movieGenres ? movieGenres : []).map(item => ({
						value: item._id,
						label: item.name,
					}))}
					onChange={this.addMovieGenresToState}
					value={this.state.movieGenres}
					isMulti
				/>
			</DropDown>
		);
	}

	onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate());

	renderData() {
		const { title, releasedate, duration, country, price, description, subtitles, errors } = this.state;
		return (
			<Data>
				<Input
					name="title"
					label="title: "
					value={title}
					error={errors.title}
					onChange={e => this.onChangeInput('title', e.target.value)}
				/>
				<Input
					name="releasedate"
					label="releasedate: "
					value={releasedate}
					error={errors.releasedate}
					onChange={e => this.onChangeInput('releasedate', e.target.value)}
				/>
				<Input
					name="duration"
					label="duration: "
					value={duration}
					error={errors.duration}
					onChange={e => this.onChangeInput('duration', e.target.value)}
				/>
				<Input
					name="country"
					label="country: "
					value={country}
					error={errors.country}
					onChange={e => this.onChangeInput('country', e.target.value)}
				/>
				<Input
					name="price"
					label="price: "
					type="number"
					value={price}
					error={errors.price}
					onChange={e => this.onChangeInput('price', e.target.value)}
				/>
				<Input
					name="description"
					label="description: "
					value={description}
					error={errors.description}
					onChange={e => this.onChangeInput('description', e.target.value)}
				/>
				<Input
					name="subtitles"
					label="subtitles: "
					value={subtitles}
					error={errors.subtitles}
					onChange={e => this.onChangeInput('subtitles', e.target.value)}
				/>
			</Data>
		);
	}
	render() {
		return (
			<Container>
				<Card>
					{this.renderHeader()}
					{this.renderData()}
					{this.renderDropDown()}
					<General warning={this.state.warning} />
				</Card>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	directors: state.movie.directors,
	actors: state.movie.actors,
	writers: state.movie.writers,
	movieGenres: state.movie.movieGenres,
});

export default connect(mapStateToProps, actions)(NewMovie);
