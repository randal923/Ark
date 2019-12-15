import React, { Component } from 'react';
import Base from '../Base';

const base = Component => {
	return class extends Component {
		render() {
			return (
				<Base history={this.props.history}>
					<Component {...this.props} />
				</Base>
			);
		}
	};
};

export default base;
