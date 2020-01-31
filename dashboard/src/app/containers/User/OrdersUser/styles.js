import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 2rem 2rem 2rem;

	button {
		padding: 0.5rem 0.8rem;
	}
	> :last-child {
		justify-self: end;
	}

	div {
		width: 100%;
	}
`;
const TableArea = styled.div`
	margin: 2rem;
`;

export { Container, TableArea };
