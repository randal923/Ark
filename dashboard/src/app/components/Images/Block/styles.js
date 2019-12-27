import styled, { css } from 'styled-components';

const Container = styled.div``;

const Images = styled.div`
	width: 6rem;
	height: 6rem;
	margin: 5px;
	background-size: cover;

	${props => css`
		background-image: url(${props.images});
	`}
`;
export { Container, Images };
