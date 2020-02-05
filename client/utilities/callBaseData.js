import actions from '../redux/actions';
import { fetchData } from './fetch';

export default function(calls = [], context) {
	return Promise.all([fetchData(actions.fetchGenres, context), ...calls.map(action => fetchData(action, context))]);
}
