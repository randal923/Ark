import axios from 'axios';
import { USER_LOGIN, USER_LOGOUT } from './types';
import { api, version } from '../config';
import { setCookie, getCookie, removeCookie } from '../utilities/cookie';
import errorHandling from './errorHandling';
import { getHeaders } from '../utilities/cookie';

export const initApp = () => {
	const rememberMe = getCookie('rememberMe');
	if (rememberMe === 'false') {
		removeCookie('rememberMe');
		removeCookie('user');
	}
};

export const currency = value => {
	return `US$ ${value.toFixed(2)}`;
};

// User
export const handleLogin = ({ email, password, rememberMe }, callback) => {
	return function(dispatch) {
		axios
			.post(`${api}/${version}/api/users/login`, { email, password })
			.then(response => {
				setCookie('user', response.data.user.token);
				setCookie('rememberMe', rememberMe);
				dispatch({ type: USER_LOGIN, payload: response.data });
			})
			.catch(err => callback(errorHandling(err)));
	};
};

export const handleLogOut = () => {
	removeCookie('user');
	removeCookie('rememberMe');
	return { type: USER_LOGOUT };
};

export const getUser = () => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users`, getHeaders())
			.then(response => {
				setCookie('user', response.data.user.token);
				setCookie('rememberMe', true);
				dispatch({ type: USER_LOGIN, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};
