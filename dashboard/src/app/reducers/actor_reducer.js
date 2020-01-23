import { GET_ACTORS, GET_ACTOR, CLEAN_ACTOR, REMOVE_ACTOR } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_ACTORS:
			return {
				...state,
				actors: action.payload.actors,
			};
		case GET_ACTOR:
			return {
				...state,
				actor: action.payload.actor,
			};
		case CLEAN_ACTOR:
		case REMOVE_ACTOR:
			return {
				...state,
				actor: null,
			};
		default:
			return state;
	}
};
