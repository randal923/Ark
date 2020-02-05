import Router from 'next/router';
import actions from '../redux/actions';
import { getCookie } from './cookies';

export default function(context) {
	if (context.isServer) {
		context.store.dispatch(actions.reauthenticate(getCookie('token', context.req)));
	} else if (context.store) {
		const token = context.store.getState().auth.token;
		if (
			!token &&
			(context.pathname.includes('/user/orders') ||
				context.pathname.includes('/user/user-data') ||
				context.pathname.includes('/user/password'))
		)
			Router.push('/user');
	}
}
