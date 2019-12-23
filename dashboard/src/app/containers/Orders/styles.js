import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	margin: 2rem;

	> :last-child {
		justify-self: end;
	}
`;

export { Container };
