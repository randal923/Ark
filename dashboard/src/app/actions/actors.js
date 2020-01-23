import axios from 'axios';
import { api, version } from '../config';
import { getHeaders } from '../utilities/cookie';
import { GET_ACTORS, GET_ACTOR, CLEAN_ACTOR, REMOVE_ACTOR } from './types';

export const getActors = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/actors`, getHeaders())
			.then(response => {
				return dispatch({ type: GET_ACTORS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const createActor = (actor, cb) => {
	return function(dispatch) {
		axios
			.post(
				`${api}/${version}/api/actors`,
				{
					name: actor.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_ACTORS, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const getActor = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/actors/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_ACTOR, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const cleanActor = () => ({ type: CLEAN_ACTOR });

export const updateActor = (actor, id, cb) => {
	return function(dispatch) {
		axios
			.put(
				`${api}/${version}/api/actors/${id}`,
				{
					name: actor.name,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_ACTORS, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const removeActor = (id, cb) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/actors/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: REMOVE_ACTOR, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};
