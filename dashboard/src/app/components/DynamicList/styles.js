import styled from 'styled-components';

const Container = styled.div`
	color: var(--medium-text-color);
	font-size: 1.4rem;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	align-items: center;
	button {
		padding: 0.5rem;
		width: 3rem;
		margin: 0.5rem;
	}
	input {
		box-shadow: 0 2px rgba(0, 0, 0, 0.15);
	}
`;

export { Container };
