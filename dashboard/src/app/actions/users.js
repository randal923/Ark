import axios from 'axios';
import { api, version } from '../config';
import errorHandling from './errorHandling';
import { GET_USERS } from './types';
import { getHeaders } from '../utilities/cookie';

export const getUsers = (offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users/admin?offset=${offset}&limit=${limit}`, getHeaders())
			.then(response => {
				console.log(response);
				return dispatch({ type: GET_USERS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const searchUsers = (search, offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users/search/${search}?off=${offset}&limit=${limit}`, getHeaders())
			.then(response => dispatch({ type: GET_USERS, payload: response.data }))
			.catch(error => console.log(error));
	};
};
