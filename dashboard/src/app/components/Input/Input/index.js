import React from 'react';
import { Container } from './styles';

const Input = ({ type, label, value, onChange }) => {
	return (
		<Container>
			{label && <label>{label}</label>}
			<input type={type} value={value} onChange={onChange} />
		</Container>
	);
};

export default Input;
