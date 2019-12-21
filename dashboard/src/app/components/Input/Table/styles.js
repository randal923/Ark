import styled from 'styled-components';

const Container = styled.div`
	thead {
		color: var(--light-text-color);
	}
	tbody {
		color: var(--medium-text-color);
	}

	button {
		color: var(--blue);
		background: transparent;
		padding: 0.5rem 0.8rem;
		margin: 0.5rem;
		border: 1px solid var(--blue);
		cursor: pointer;
		&:hover {
			color: var(--light-text-color);
			background: var(--blue);
		}
	}
`;

export { Container };
