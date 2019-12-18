import React from 'react';
import { Container } from './styles';

const Search = ({ value, onChange, placeHolder }) => {
	return (
		<Container>
			<input value={value} onChange={onChange} placeholder={placeHolder} />
		</Container>
	);
};
