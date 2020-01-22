import React from 'react';
import { Link } from 'react-router-dom';

export default ({ path, history }) => {
	if (path)
		return (
			<Link c to={path}>
				{'< Back'}
			</Link>
		);
	else return <span onClick={() => history.goBack()}>{'< Back'}</span>;
};
