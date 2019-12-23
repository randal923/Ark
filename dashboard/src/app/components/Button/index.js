import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Button = ({ type, route, onClick, label }) => {
	if (route) {
		return (
			<Container type={type}>
				<Link to={route}>
					<button onClick={onClick}>{label}</button>
				</Link>
			</Container>
		);
	} else {
		return (
			<Container type={type}>
				<button onClick={onClick}>{label}</button>
			</Container>
		);
	}
};

export default Button;
