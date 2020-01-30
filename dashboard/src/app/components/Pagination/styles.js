import styled, { css } from 'styled-components';

const Container = styled.div`
	color: var(--medium-text-color);
	span {
		font-size: 1.7rem;
		margin-right: 2rem;
		cursor: pointer;

		:hover {
			color: var(--blue);
		}
	}
`;

const Active = styled.span`
	${props =>
		props.active &&
		css`
			color: var(--blue);
		`}
`;
export { Container, Active };
