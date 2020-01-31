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

const Header = styled.div`
	display: flex;
	margin: 2rem;
	align-items: center;

	span:first-child {
		font-size: 1.8rem;
		font-weight: bold;
		margin-right: auto;
	}
`;
export { Container, Header };
