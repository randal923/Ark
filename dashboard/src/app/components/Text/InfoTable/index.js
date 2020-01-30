import React from 'react';
import { Container } from './styles';

const InfoTable = ({ name, value }) => {
	return (
		<Container>
			<strong>{name}:&nbsp;</strong>
			<span>{value}</span>
		</Container>
	);
};

export default InfoTable;
