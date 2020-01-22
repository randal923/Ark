import { GET_REVIEW, GET_REVIEWS, CLEAN_REVIEW, REMOVE_REVIEW } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_REVIEWS:
			return {
				...state,
				reviews: action.payload.reviews,
			};
		case GET_REVIEW:
			return {
				...state,
				review: action.payload.review,
			};
		case CLEAN_REVIEW:
		case REMOVE_REVIEW:
			return {
				...state,
				review: null,
			};
		default:
			return state;
	}
};
