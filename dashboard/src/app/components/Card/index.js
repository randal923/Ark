import React from 'react';
import { Container } from './styles';

const Card = props => {
	return <Container size={props.size}>{props.children}</Container>;
};

export default Card;
