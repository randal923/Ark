import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Images, DropDown } from './styles';
import Select from 'react-select';

import Button from '../../components/Button';
import Title from '../../components/Text/Title';
import Card from '../../components/Card';
import InfoTable from '../../components/Text/InfoTable';
import Dynamic from '../../components/Input/Dynamic';
import ImageBlock from '../../components/Images/Block';

import { connect } from 'react-redux';
import * as actionsMovies from '../../actions/movies';
import * as actionsGenre from '../../actions/genres';
import General from '../../components/Alerts/General';

class Movie extends Component {
	genereStateMovie = props => ({
		title: props.movie ? props.movie.title : '',
		description: props.movie ? props.movie.description : '',
		genre: props.movie ? props.movie.genre : [],
		posters: props.movie ? props.movie.posters : '',
		price: props.movie ? props.movie.price : '',
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
		const { getMovie, getGenres } = this.props;
		const { id } = this.props.match.params;
		getMovie(id);
		getGenres(id);
	}

	componentDidUpdate(prevProps) {
		if (
			(!prevProps.movie && this.props.movie) ||
			(prevProps.movie && this.props.movie && prevProps.movie.updatedAt !== this.props.movie.updatedAt)
		) {
			this.setState(this.genereStateMovie(this.props));
			const { getMovie, getGenres } = this.props;
			const { id } = this.props.match.params;
			getMovie(id);
			getGenres(id);
		}
	}

	onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate());

	addGenreToState = genre => {
		this.setState({ genre });
	};

	renderContent() {
		const { title, description, price, genre, salePrice, errors } = this.state;

		const { genres, movie } = this.props;
		return (
			<Container>
				{movie && <Link to={`/reviews/${movie._id}`}>Reviews</Link>}
				<InfoTable
					name="Title"
					value={
						<Dynamic
							errors={errors.title}
							value={title}
							name="name"
							handleSubmit={value => this.onChangeInput('title', value)}
						/>
					}
				/>
				<InfoTable
					name="Genre"
					value={
						<DropDown>
							<Select
								options={(genres ? genres : []).map(item => ({
									value: item._id,
									label: item.name,
								}))}
								onChange={this.addGenreToState}
								defaultValue={(genre ? genre : []).map(item => ({
									value: item._id,
									label: item.name,
								}))}
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
				<Header>
					<General warning={this.state.warning} />
					<Title type="h1" title="Movie" />
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
});

export default connect(mapStateToProps, { ...actionsMovies, ...actionsGenre })(Movie);
