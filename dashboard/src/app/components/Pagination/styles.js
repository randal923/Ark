import styled, { css } from 'styled-components';

const Container = styled.div`
	color: var(--medium-text-color);
`;

const Active = styled.span`
	${props =>
		props.active &&
		css`
			color: var(--blue);
		`}
`;
export { Container, Active };
