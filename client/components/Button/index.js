import React from 'react';
import Link from 'next/router';
import { Container } from './styles';

const Button = ({ type, route, onClick, label, icon }) => {
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
				<button onClick={onClick}>
					{icon}
					{label}
				</button>
			</Container>
		);
	}
};

export default Button;
