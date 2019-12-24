import React from 'react';
import { Container } from './styles';

const Input = ({ type, label, value, onChange, placeholder }) => {
	return (
		<Container>
			{label && <label>{label}</label>}
			<input type={type} value={value} onChange={onChange} placeholder={placeholder} />
		</Container>
	);
};

export default Input;
