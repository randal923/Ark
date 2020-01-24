import { GET_WRITERS, GET_WRITER, CLEAN_WRITER, REMOVE_WRITER } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_WRITERS:
			return {
				...state,
				writers: action.payload.writers,
			};
		case GET_WRITER:
			return {
				...state,
				writer: action.payload.writer,
			};
		case CLEAN_WRITER:
		case REMOVE_WRITER:
			return {
				...state,
				writer: null,
			};
		default:
			return state;
	}
};
