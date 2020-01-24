import axios from 'axios';
import { api, version } from '../config';
import { getHeaders } from '../utilities/cookie';
import { GET_WRITERS, GET_WRITER, CLEAN_WRITER, REMOVE_WRITER } from './types';

export const getWriters = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/writers`, getHeaders())
			.then(response => {
				return dispatch({ type: GET_WRITERS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const createWriter = (writer, cb) => {
	return function(dispatch) {
		axios
			.post(
				`${api}/${version}/api/writers`,
				{
					name: writer.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_WRITERS, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const getWriter = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/writers/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_WRITER, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const cleanWriter = () => ({ type: CLEAN_WRITER });

export const updateWriter = (writer, id, cb) => {
	return function(dispatch) {
		axios
			.put(
				`${api}/${version}/api/writers/${id}`,
				{
					name: writer.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_WRITERS, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const removeWriter = (id, cb) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/writers/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: REMOVE_WRITER, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};
