import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from './redux';

import { prepareClientPortals } from '@jesstelford/react-portal-universal';

if (typeof window !== 'undefined') {
	// On the client, we have to run this once before React attempts a render.
	// Here in _app is a great place to do it as this file is only required once,
	// and right now (outside the constructor) is before React is invoked.
	prepareClientPortals();
}

class Main extends App {
	static async getInitialProps({ Component, context }) {
		return {
			pageProps: Component.getInitialProps ? await Component.getInitialProps(context) : {},
		};
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<>
				<div id="modal" />
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</>
		);
	}
}

export default withRedux(initStore)(Main);
