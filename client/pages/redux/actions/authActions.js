import { AUTHENTICATE_TOKEN } from '../types';

export const reauthenticate = token => ({ type: AUTHENTICATE_TOKEN, payload: token });

export default {
	reauthenticate,
};
