import axios from 'axios';
import { api, version } from '../config';
import { getHeaders } from '../utilities/cookie';
import { GET_DIRECTORS, GET_DIRECTOR, CLEAN_DIRECTOR, REMOVE_DIRECTOR } from './types';

export const getDirectors = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/directors`, getHeaders())
			.then(response => {
				return dispatch({ type: GET_DIRECTORS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const createDirector = (director, cb) => {
	return function(dispatch) {
		axios
			.post(
				`${api}/${version}/api/directors`,
				{
					name: director.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_DIRECTORS, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const getDirector = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/directors/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_DIRECTOR, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const cleanDirector = () => ({ type: CLEAN_DIRECTOR });

export const updateDirector = (director, id, cb) => {
	return function(dispatch) {
		axios
			.put(
				`${api}/${version}/api/directors/${id}`,
				{
					name: director.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_DIRECTORS, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const removeDirector = (id, cb) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/directors/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: REMOVE_DIRECTOR, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};
