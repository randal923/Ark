import { AUTHENTICATE_TOKEN } from '../types';

const initialState = { token: null, user: null };

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE_TOKEN:
			return { ...state, token: action.payload };
		default:
			return state;
	}
};
