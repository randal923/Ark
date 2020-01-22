import axios from 'axios';
import { api, version } from '../config';
import { getHeaders } from '../utilities/cookie';
import { GET_REVIEWS, GET_REVIEW, CLEAN_REVIEW, REMOVE_REVIEW } from './types';

export const getReviews = movie => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/reviews?movie=${movie}`, getHeaders())
			.then(response => dispatch({ type: GET_REVIEWS, payload: response.data }))
			.catch(error => console.log(error));
	};
};

export const getReview = (id, movie) => {
	return function(dispatch) {
		axios
			.get(`${api}/${version}/api/reviews/${id}?movie=${movie}`, getHeaders())
			.then(response => dispatch({ type: GET_REVIEW, payload: response.data }))
			.catch(error => console.log(error));
	};
};

export const cleanReview = () => ({ type: CLEAN_REVIEW });

export const removeReview = (id, movie, cb) => {
	return function(dispatch) {
		axios
			.delete(`${api}/${version}/api/reviews/${id}?movie=${movie}`, getHeaders())
			.then(response => {
				dispatch({ type: REMOVE_REVIEW, payload: response.data });
				cb(null);
			})
			.catch(error => cb(error));
	};
};
