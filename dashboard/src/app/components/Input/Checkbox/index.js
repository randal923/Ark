import React from 'react';
import { Container } from './styles';

const Checkbox = ({ label, value, onChange }) => {
	return (
		<Container>
			<input type="checkbox" checked={value} onChange={onChange} />
			<span>&nbsp;{label}</span>
		</Container>
	);
};

export default Checkbox;
