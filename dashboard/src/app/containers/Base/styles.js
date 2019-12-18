import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 15rem 1fr;
	grid-template-rows: 7rem 1fr;
	height: 100%;

	${props =>
		!props.open &&
		css`
			grid-template-columns: 10rem 1fr;
		`}
`;
