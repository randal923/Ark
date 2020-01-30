import styled from 'styled-components';

const Container = styled.span`
	display: flex;
	align-items: center;
	svg {
		margin-left: 0.4rem;
		height: 2rem;
		width: 2rem;
		color: var(--dark-text-color);
		:hover {
			cursor: pointer;
			color: var(--blue);
		}
	}
`;

export { Container };
