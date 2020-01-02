import { GET_ORDERS, GET_ORDER, CLEAN_ORDER, CANCEL_ORDER } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return {
				...state,
				orders: action.payload.orders,
			};
		case GET_ORDER:
			return {
				...state,
				order: action.payload,
			};
		case CLEAN_ORDER: {
			return {
				...state,
				order: null,
			};
		}
		case CANCEL_ORDER: {
			return {
				...state,
				order: {
					...state.order,
					order: {
						...state.order.order,
						cancelled: action.payload.cancelled,
					},
				},
			};
		}
		default:
			return state;
	}
};
