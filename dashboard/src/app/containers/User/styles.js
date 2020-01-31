import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem;
	button {
		padding: 0.1rem;
		margin: 0.2rem;
		color: white;
	}
`;

const Header = styled.div`
	display: flex;
	margin: 2rem;
	align-items: center;

	h1 {
		margin-right: auto;
	}
`;
export { Container, Header };
