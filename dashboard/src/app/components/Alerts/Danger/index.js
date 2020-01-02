import React from 'react';

import { Container } from './styles';

const Danger = ({ error }) => {
	if (!error) return null;
	return <Container>{error.message}</Container>;
};

export default Danger;
