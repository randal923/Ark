import { GET_MOVIES, GET_DIRECTORS, GET_ACTORS, GET_WRITERS, GET_MOVIE_GENRES } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				movies: action.payload.movies,
			};
		case GET_DIRECTORS:
			return {
				...state,
				directors: action.payload.directors,
			};
		case GET_ACTORS:
			return {
				...state,
				actors: action.payload.actors,
			};
		case GET_WRITERS:
			return {
				...state,
				writers: action.payload.writers,
			};
		case GET_MOVIE_GENRES:
			return {
				...state,
				movieGenres: action.payload.genres,
			};

		default:
			return state;
	}
};
