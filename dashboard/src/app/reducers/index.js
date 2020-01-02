import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import orderReducer from './order_reducer';
import userReducer from './user_reducer';

const reducers = combineReducers({
	auth: authReducer,
	order: orderReducer,
	user: userReducer,
});

export default reducers;
