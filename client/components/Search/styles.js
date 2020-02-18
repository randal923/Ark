import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	input {
		background: #2e2e2e;
		border: 1px solid #232323;
		border-radius: 1.5rem;
		width: 20rem;
		height: 2.5rem;
		color: white;
		padding: 0 0 0 10px;
	}
	button {
		position: absolute;
		top: 0rem;
		right: 1rem;
		background: transparent;
		border: 0;
	}
`;

export { Container };
