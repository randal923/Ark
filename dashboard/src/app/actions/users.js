import axios from 'axios';
import { api, version } from '../config';
//import errorHandling from './errorHandling';
import { GET_USERS, GET_USER_ORDERS, GET_USER, CLEAN_USER, REMOVE_USER } from './types';
import { getHeaders } from '../utilities/cookie';

export const getUsers = (offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users/admin?offset=${offset}&limit=${limit}`, getHeaders())
			.then(response => {
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

export const getUserOrders = (id, offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users/admin/${id}/orders?offset=${offset}&limit=${limit}`, getHeaders())
			.then(response => dispatch({ type: GET_USER_ORDERS, payload: response.data }))
			.catch(error => console.log(error));
	};
};

export const cleanUser = () => ({ type: CLEAN_USER });

export const updateUser = (user, id, cb) => {
	return function(dispatch) {
		axios
			.put(
				`${api}/${version}/api/users/admin/${id}`,
				{
					name: user.name,
					email: user.email,
				},
				getHeaders()
			)
			.then(response => {
				dispatch({ type: GET_USER, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const removeUser = (id, cb) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/users/admin/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: REMOVE_USER, payload: response.data });
				cb(null);
			})
			.catch(error => console.log(error));
	};
};

export const getUser = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users/admin/${id}`, getHeaders())
			.then(response => dispatch({ type: GET_USER, payload: response.data }))
			.catch(error => console.log(error));
	};
};
