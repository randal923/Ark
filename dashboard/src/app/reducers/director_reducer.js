import { GET_DIRECTORS, GET_DIRECTOR, CLEAN_DIRECTOR, REMOVE_DIRECTOR } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_DIRECTORS:
			return {
				...state,
				directors: action.payload.directors,
			};
		case GET_DIRECTOR:
			return {
				...state,
				director: action.payload.director,
			};
		case CLEAN_DIRECTOR:
		case REMOVE_DIRECTOR:
			return {
				...state,
				director: null,
			};
		default:
			return state;
	}
};
