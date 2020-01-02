import React from 'react';
import { Container } from './styles';

const Input = ({ type, label, value, onChange, placeholder, error }) => {
	return (
		<Container>
			{label && <label>{label}</label>}
			<input type={type} value={value} onChange={onChange} placeholder={placeholder} />
			{error && <small>{error}</small>}
		</Container>
	);
};

export default Input;
