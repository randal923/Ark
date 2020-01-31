import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	margin: 2rem;

	h2 {
		margin-left: 1rem;
	}
	button {
		padding: 0.5rem 0.8rem;
	}
	> :last-child {
		justify-self: end;
	}
`;

const NewActor = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem;
	height: 2.7rem;
	a {
		color: var(--blue);
		font-size: 1.3rem;
	}
`;

export { Container, NewActor };
