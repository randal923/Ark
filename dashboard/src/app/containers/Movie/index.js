import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Images, DropDown } from './styles';
import Select from 'react-select';

import Button from '../../components/Button';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import ImageBlock from '../../components/Images/Block';

import { connect } from 'react-redux';
import * as actionsMovies from '../../actions/movies';
import * as actionsGenre from '../../actions/genres';
import * as actionsWriters from '../../actions/writers';
import * as actionsDirectors from '../../actions/directors';
import * as actionsActors from '../../actions/actors';

import General from '../../components/Alerts/General';

class Movie extends Component {
	genereStateMovie = props => ({
		title: props.movie ? props.movie.title : '',
		description: props.movie ? props.movie.description : '',
		duration: props.movie ? props.movie.duration : '',
		genre: props.movie ? props.movie.genre : '',
		posters: props.movie ? props.movie.posters : '',
		price: props.movie ? props.movie.price : '',
		country: props.movie ? props.movie.country : [],
		subtitles: props.movie ? props.movie.subtitles : [],
		releasedate: props.movie ? props.movie.releasedate : '',
		writers: props.movie ? props.movie.writers : '',
		directors: props.movie ? props.movie.directors : '',
		actors: props.movie ? props.movie.actors : '',
	});

	constructor(props) {
		super();
		this.state = {
			...this.genereStateMovie(props),
			warning: null,
			errors: {},
		};

		this.handePosterUpload = this.handePosterUpload.bind(this);
		this.updateMovie = this.updateMovie.bind(this);
	}

	componentDidMount() {
		const { getMovie, getGenres, getWriters, getDirectors, getActors } = this.props;
		const { id } = this.props.match.params;
		getMovie(id);
		getGenres();
		getWriters();
		getDirectors();
		getActors();
	}

	componentDidUpdate(prevProps) {
		if (
			(!prevProps.movie && this.props.movie) ||
			(prevProps.movie && this.props.movie && prevProps.movie.updatedAt !== this.props.movie.updatedAt)
		) {
			this.setState(this.genereStateMovie(this.props));
			const { getMovie, getGenres, getWriters, getDirectors, getActors } = this.props;
			const { id } = this.props.match.params;
			getMovie(id);
			getGenres();
			getWriters();
			getDirectors();
			getActors();
		}
	}

	onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate());
	onChangeInputArray = (field, value) => this.setState({ [field]: [value] });

	addGenreToState = genre => {
		this.setState({ genre });
	};
	addWritersToState = writers => {
		this.setState({ writers });
	};
	addDirectorsToState = directors => {
		this.setState({ directors });
	};

	addActorsToState = actors => {
		this.setState({ actors });
	};

	renderContent() {
		const { releasedate, duration, subtitles, country, description, price, salePrice, errors } = this.state;

		const { movie } = this.props;
		return (
			<Container>
				{movie && <Link to={`/reviews/${movie._id}`}>Reviews</Link>}
				<InfoTable
					name="Genres"
					value={
						<DropDown>
							<Select
								options={(this.props.genres ? this.props.genres : []).map(item => ({
									value: item._id,
									label: item.name,
								}))}
								onChange={this.addGenreToState}
								defaultValue={
									this.state.genre &&
									this.state.genre.map(item => ({
										value: item._id,
										label: item.name,
									}))
								}
								isMulti
							/>
						</DropDown>
					}
				/>
				<InfoTable
					name="Writers"
					value={
						<DropDown>
							<Select
								options={(this.props.writers ? this.props.writers : []).map(item => ({
									value: item._id,
									label: item.name,
								}))}
								onChange={this.addWritersToState}
								defaultValue={
									this.state.writers &&
									this.state.writers.map(item => ({
										value: item._id,
										label: item.name,
									}))
								}
								isMulti
							/>
						</DropDown>
					}
				/>
				<InfoTable
					name="Directors"
					value={
						<DropDown>
							<Select
								options={(this.props.directors ? this.props.directors : []).map(item => ({
									value: item._id,
									label: item.name,
								}))}
								onChange={this.addDirectorsToState}
								defaultValue={
									this.state.directors &&
									this.state.directors.map(item => ({
										value: item._id,
										label: item.name,
									}))
								}
								isMulti
							/>
						</DropDown>
					}
				/>
				<InfoTable
					name="Actors"
					value={
						<DropDown>
							<Select
								options={(this.props.actors ? this.props.actors : []).map(item => ({
									value: item._id,
									label: item.name,
								}))}
								onChange={this.addActorsToState}
								defaultValue={
									this.state.actors &&
									this.state.actors.map(item => ({
										value: item._id,
										label: item.name,
									}))
								}
								isMulti
							/>
						</DropDown>
					}
				/>
				<InfoTable
					name="Description"
					value={
						<Dynamic
							value={description}
							errors={errors.description}
							name="description"
							handleSubmit={value => this.onChangeInput('description', value)}
						/>
					}
				/>
				<InfoTable
					name="Duration"
					value={
						<Dynamic
							value={duration}
							errors={errors.duration}
							name="duration"
							handleSubmit={value => this.onChangeInput('duration', value)}
						/>
					}
				/>

				<InfoTable
					name="Country"
					value={
						<Dynamic
							value={country}
							errors={errors.country}
							name="country"
							handleSubmit={value => this.onChangeInputArray('country', value)}
						/>
					}
				/>

				<InfoTable
					name="Subtitles"
					value={
						<Dynamic
							value={subtitles}
							errors={errors.subtitles}
							name="subtitles"
							handleSubmit={value => this.onChangeInputArray('subtitles', value)}
						/>
					}
				/>

				<InfoTable
					name="Releasedate"
					value={
						<Dynamic
							value={releasedate}
							errors={errors.releasedate}
							name="releasedate"
							handleSubmit={value => this.onChangeInput('releasedate', value)}
						/>
					}
				/>
				<InfoTable
					name="Price"
					value={
						<Dynamic
							value={price}
							errors={errors.price}
							name="price"
							handleSubmit={value => this.onChangeInput('price', value)}
						/>
					}
				/>

				<InfoTable
					name="Sale Price"
					value={
						<Dynamic
							value={salePrice || 0}
							name="salePrice"
							errors={errors.price}
							handleSubmit={value => this.onChangeInput('salePrice', value)}
						/>
					}
				/>
			</Container>
		);
	}

	onRemove = id => {
		const { movie } = this.props;
		if (!movie) return null;

		const { posters: _posters } = this.state;

		const posters = _posters.filter((poster, index) => index !== id);
		if (window.confirm('Would you really like to remove this posters?')) {
			this.props.removeMovieImages(posters, movie._id, error => {
				this.setState({
					warning: { status: !error, msg: error ? error.message : 'Poster removed successfully.' },
				});
			});
		}
	};

	handePosterUpload(e) {
		const { movie } = this.props;
		if (!movie) return null;

		const data = new FormData();
		data.append('files', e.target.files[0]);

		this.props.updateMovieImages(data, movie._id, error => {
			this.setState({ warning: { status: !error, msg: error ? error.message : 'Poster added successfully.' } });
		});
	}

	renderImages() {
		const { posters } = this.state;
		return (
			<Images>
				<ImageBlock images={posters || []} handleSubmit={this.handePosterUpload} onRemove={this.onRemove} />
			</Images>
		);
	}

	validate() {
		const { title, description, genre, price } = this.state;
		const errors = {};

		if (!title) errors.title = "Title can't be blank.";
		if (!description) errors.description = "Description can't be blank.";
		if (!genre) errors.genre = "Genre can't be blank.";
		if (!price) errors.price = "Price can't be blank.";

		this.setState({ errors });
		return !(Object.keys(errors).length > 0);
	}

	updateMovie() {
		const { movie, updateMovie } = this.props;
		if (!movie || !this.validate()) return null;
		updateMovie(this.state, movie._id, error => {
			this.setState({
				warning: { status: !error, msg: error ? error.message : 'Movie updated successfully.' },
			});
		});
	}

	render() {
		return (
			<Card>
				<General warning={this.state.warning} />
				<Header>
					<Dynamic
						name="Title"
						value={this.state.title}
						handleSubmit={value => this.onChangeInput('title', value)}
					/>
					<Button type="success" label="Save" onClick={this.updateMovie} />
				</Header>
				{this.renderContent()}
				{this.renderImages()}
			</Card>
		);
	}
}

const mapStateToProps = state => ({
	movie: state.movie.movie,
	genres: state.genre.genres,
	writers: state.writers.writers,
	directors: state.directors.directors,
	actors: state.actors.actors,
});

export default connect(mapStateToProps, {
	...actionsMovies,
	...actionsGenre,
	...actionsWriters,
	...actionsDirectors,
	...actionsActors,
})(Movie);
