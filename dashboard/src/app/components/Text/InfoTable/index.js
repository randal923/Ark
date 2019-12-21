import React from 'react';
import { Container } from './styles';

const InfoTable = ({ name, value }) => {
	return (
		<Container>
			<strong>{name}:&nbsp;</strong>
			<strong>{value}</strong>
		</Container>
	);
};

export default InfoTable;
