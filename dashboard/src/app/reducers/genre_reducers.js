import { GET_GENRES, GET_GENRE, CLEAN_GENRE, REMOVE_GENRE, GET_MOVIES_GENRE } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_GENRES:
			return {
				...state,
				genres: action.payload.genres,
			};
		case GET_GENRE:
			return {
				...state,
				genre: action.payload.genre,
			};
		case CLEAN_GENRE:
		case REMOVE_GENRE:
			return {
				...state,
				genre: null,
			};
		case GET_MOVIES_GENRE:
			return {
				...state,
				genreMovies: action.payload.movies,
			};
		default:
			return state;
	}
};
