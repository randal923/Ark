import axios from 'axios';
import { api, version } from '../config';
import { getHeaders } from '../utilities/cookie';
import {
	GET_MOVIES,
	GET_DIRECTORS,
	GET_ACTORS,
	GET_WRITERS,
	GET_MOVIE_GENRES,
	CREATE_MOVIE,
	GET_MOVIE,
	CLEAN_MOVIE,
} from './types';

export const getMovies = (order, offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/movies?offset=${offset}&limit=${limit}&sortType=${order}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_MOVIES, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getMoviesSearch = (search, order, offset, limit) => {
	return function(dispatch) {
		axios
			.get(
				`${api}/${version}/api/movies/search/${search}?offset=${offset}&limit=${limit}&sortType=${order}`,
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_MOVIES, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const createMovie = (movie, cb) => {
	movie = {
		title: movie.title,
		releasedate: movie.releasedate,
		duration: movie.duration,
		country: movie.country.trim().split(' '),
		price: Number(movie.price),
		description: movie.description,
		subtitles: movie.subtitles.trim().split(' '),
		directors: movie.directors.map(item => {
			return item.value;
		}),
		genre: movie.genre.map(item => {
			return item.value;
		}),
		actors: movie.actors.map(item => {
			return item.value;
		}),
		writers: movie.writers.map(item => {
			return item.value;
		}),
	};

	return function(dispatch) {
		axios
			.post(`${api}/${version}/api/movies`, movie, getHeaders())
			.then(response => {
				console.log(response);
				dispatch({ type: CREATE_MOVIE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

// GET ACTORS, WRITERS, DIRECTORS
export const getDirectors = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/directors`, getHeaders())
			.then(response => {
				dispatch({ type: GET_DIRECTORS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getActors = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/actors`, getHeaders())
			.then(response => {
				dispatch({ type: GET_ACTORS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getWriters = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/writers`, getHeaders())
			.then(response => {
				dispatch({ type: GET_WRITERS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getMovieGenres = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/genres`, getHeaders())
			.then(response => {
				dispatch({ type: GET_MOVIE_GENRES, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getMovie = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/movies/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_MOVIE, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const cleanMovie = () => ({ type: CLEAN_MOVIE });

export const updateMovie = (movie, id, cb) => {
	return function(dispatch) {
		axios
			.put(
				`${api}/${version}/api/movies/${id}`,
				{
					title: movie.title,
					releasedate: movie.releasedate,
					duration: movie.duration,
					country: movie.country,
					price: movie.price,
					description: movie.description,
					subtitles: movie.subtitles,
					genre: movie.genre.map(item => (item.value ? item.value : item._id)),
					writers: movie.writers.map(item => (item.value ? item.value : item._id)),
					directors: movie.directors.map(item => (item.value ? item.value : item._id)),
					actors: movie.actors.map(item => (item.value ? item.value : item._id)),
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_MOVIE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const removeMovieImages = (posters, id, cb) => {
	return function(dispatch) {
		axios
			.put(`${api}/${version}/api/movies/${id}`, { posters }, getHeaders())
			.then(response => {
				dispatch({ type: GET_MOVIE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const updateMovieImages = (data, id, cb) => {
	return function(dispatch) {
		axios
			.put(`${api}/${version}/api/movies/images/${id}`, data, getHeaders())
			.then(response => {
				dispatch({ type: GET_MOVIE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};
