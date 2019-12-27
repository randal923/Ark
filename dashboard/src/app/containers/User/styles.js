import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	button {
		padding: 0.1rem;
		margin: 0.2rem;
		color: white;
	}

	div {
	}
`;

const Header = styled.div`
	display: flex;
	margin: 1rem;
	align-items: center;

	h1 {
		margin-right: auto;
	}
`;
export { Container, Header };
