import React from 'react';
import { LinkContainer, ButtonContainer } from './styles';
import { Link } from 'react-router-dom';

const ReturnButton = ({ type, onClick, label }) => {
	return (
		<ButtonContainer type={type}>
			<button onClick={onClick}>{label}</button>
		</ButtonContainer>
	);
};

const Button = ({ type, route, onClick, label }) => {
	if (route) {
		return (
			<LinkContainer type={type}>
				<Link to={route}>
					<ReturnButton onClick={onClick} label={label} />
				</Link>
			</LinkContainer>
		);
	} else {
		return <ReturnButton onClick={onClick} label={label} />;
	}
};

export default Button;
