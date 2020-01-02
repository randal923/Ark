import { USER_LOGIN, USER_LOGOUT } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				user: action.payload.user,
				authorized: true,
			};
		case USER_LOGOUT:
			return {
				...state,
				user: null,
				authorized: false,
			};
		default:
			return state;
	}
};
