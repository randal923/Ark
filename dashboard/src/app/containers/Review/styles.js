import styled from 'styled-components';

const Header = styled.div`
	margin: 2rem;
	display: flex;
	justify-content: space-between;
	button {
		padding: 0.5rem 0.8rem;
		margin: 0.5rem;
	}

	span {
		cursor: pointer;
		color: var(--blue);
		font-size: 1.4rem;
	}
`;

const Container = styled.div`
	margin: 1rem;
	h1 {
		margin: 1rem;
	}
	h2 {
		margin: 1rem;
	}
`;

const TextArea = styled.p`
	margin: 1rem;
`;

export { Container, Header, TextArea };
