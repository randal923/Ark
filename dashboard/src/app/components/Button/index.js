import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const ReturnButton = ({ onClick, label }) => {
	return (
		<Container>
			<button onClick={onClick}>{label}</button>
		</Container>
	);
};

const Button = ({ route, onClick, label }) => {
	if (route) {
		return (
			<Link to={route}>
				<ReturnButton onClick={onClick} label={label} />
			</Link>
		);
	} else {
		return <ReturnButton onClick={onClick} label={label} />;
	}
};

export default Button;
