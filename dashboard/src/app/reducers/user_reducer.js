import { GET_USERS, GET_USER, CLEAN_USER, GET_USER_ORDERS, REMOVE_USER } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload.users,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload.user,
			};
		case CLEAN_USER:
			return {
				...state,
				user: null,
			};
		case GET_USER_ORDERS:
			return {
				...state,
				userOrders: action.payload.orders,
			};
		case REMOVE_USER:
			return {
				...state,
				user: { ...state.user, deleted: action.payload.deleted },
			};
		default:
			return state;
	}
};
