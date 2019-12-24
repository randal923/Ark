import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	input {
		margin: 1rem;
		background: #22252a;
		border-radius: 3px;
		height: 3rem;
		width: 100%;
		border: 1px solid transparent;
		color: var(--medium-text-color);
		padding: 1.4rem 2rem 1.6rem;
		font-size: 1.3rem;
		font-weight: 500;
		box-shadow: 0 2px rgba(0, 0, 0, 0.15);

		:focus {
			border-color: var(--blue);
		}
	}
	button {
		background-color: transparent;
		border: 0;
		margin-left: -5rem;
		color: white;
		cursor: pointer;
		outline: none;
		&:hover {
			color: var(--blue);
		}
	}
`;

export { Container };
