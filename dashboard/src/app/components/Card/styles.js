import styled, { css } from 'styled-components';

const Container = styled.div`
	background: #2d3035;
	border: 1px solid #353a53;
	max-width: 100%;
	margin: 1.5rem;

	${props => css`
		min-height: ${props.size};
	`}
`;

export { Container };
