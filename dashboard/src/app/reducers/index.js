import { combineReducers } from 'redux';

import authReducer from './auth_reducer';
import orderReducer from './order_reducer';
import userReducer from './user_reducer';
import genreReducer from './genre_reducers';
import movieReducer from './movie_reducer';
import reviewReducer from './review_reducer';
import actorReducer from './actor_reducer';

const reducers = combineReducers({
	auth: authReducer,
	order: orderReducer,
	user: userReducer,
	genre: genreReducer,
	movie: movieReducer,
	review: reviewReducer,
	actors: actorReducer,
});

export default reducers;
