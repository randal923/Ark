import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import orderReducer from './order_reducer';
import userReducer from './user_reducer';
import genreReducer from './genre_reducers';
import movieReducer from './movie_reducer';

const reducers = combineReducers({
	auth: authReducer,
	order: orderReducer,
	user: userReducer,
	genre: genreReducer,
	movie: movieReducer,
});

export default reducers;