import axios from 'axios';
import { api, version } from '../config';
//import errorHandling from './errorHandling';
import { GET_ORDERS, GET_ORDER, CLEAN_ORDER, CANCEL_ORDER } from './types';
import { getHeaders } from '../utilities/cookie';

export const getOrders = (offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/orders/admin?offset=${offset}&limit=${limit}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_ORDERS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getOrdersSearch = (search, offset, limit) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/users/search/${search}/orders?offset=${offset}&limit=${limit}`, getHeaders())
			.then(response => {
				dispatch({ type: GET_ORDERS, payload: response.data });
			})
			.catch(error => console.log(error));
	};
};

export const getOrder = id => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/orders/admin/${id}`, getHeaders())
			.then(response => dispatch({ type: GET_ORDER, payload: response.data }))
			.catch(error => console.log(error));
	};
};

export const cancelOrder = (id, callback) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/orders/admin/${id}`, getHeaders())
			.then(response => {
				dispatch({ type: CANCEL_ORDER, payload: response.data });
				callback(null);
			})
			.catch(error => callback(console.log(error)));
	};
};

export const cleanOrder = () => {
	return {
		type: CLEAN_ORDER,
	};
};

export const setNewPaymentStatus = (status, paymentId, orderId, callback) => {
	return function(dispatch) {
		axios
			.put(`${api}/${version}/api/payments/${paymentId}?order=${orderId}`, { status }, getHeaders())
			.then(response => {
				dispatch(getOrder(orderId));
				callback(null);
			})
			.catch(error => callback(console.log(error)));
	};
};
