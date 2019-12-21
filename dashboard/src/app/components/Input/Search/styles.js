import styled from 'styled-components';

const Container = styled.div`
	input {
		margin: 1rem;
		background: #22252a;
		border-radius: 3px;
		height: 3rem;
		border: 1px solid var(--ark-light-grey);
		color: white;
		padding: 1.4rem 2rem 1.6rem;
		font-size: 1.3rem;

		&:focus {
			border-color: rgba(0, 165, 255, 0.6);
		}
	}
	button {
		background-color: transparent;
		border: 0;
		color: var(--test-color);
		cursor: pointer;
		&:hover {
			color: var(--ark-blue);
		}
	}
`;

export { Container };
