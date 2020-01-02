import React from 'react';

import { Container } from './styles';

const General = ({ warning }) => {
	if (!warning) return null;
	const { status, msg } = warning;
	return (
		<Container status={status}>
			<span>{msg}</span>
		</Container>
	);
};

export default General;
