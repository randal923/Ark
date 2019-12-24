import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	margin: 2rem;

	button {
		padding: 0.5rem 0.8rem;
	}
	> :last-child {
		justify-self: end;
	}
`;

export { Container };
