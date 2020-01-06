import axios from 'axios';
import { api, version } from '../config';
import { getHeaders } from '../utilities/cookie';
import { GET_GENRES, GET_GENRE, CLEAN_GENRE, REMOVE_GENRE, GET_MOVIES_GENRE } from './types';

export const getGenres = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/genres`, getHeaders())
			.then(response => {
				return dispatch({ type: GET_GENRES, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const createGenre = (genre, cb) => {
	return function(dispatch) {
		axios
			.post(
				`${api}/${version}/api/genres`,
				{
					name: genre.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_GENRE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const getGenre = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/genres/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_GENRE, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const cleanGenre = () => ({ type: CLEAN_GENRE });

export const getMoviesGenre = (id, offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/genres/${id}/movies?offset=${offset}&limit=${limit}`, getHeaders())
			.then(response => {
				return dispatch({ type: GET_MOVIES_GENRE, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const updateGenre = (genre, id, cb) => {
	return function(dispatch) {
		axios
			.put(
				`${api}/${version}/api/genres/${id}`,
				{
					name: genre.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_GENRE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const removeGenre = (id, cb) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/genres/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: REMOVE_GENRE, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};
