import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	input {
		margin: 1rem;
		background: #22252a;
		border-radius: 3px;
		height: 3rem;
		width: 100%;
		border: 1px solid var(--ark-light-grey);
		color: white;
		padding: 1.4rem 2rem 1.6rem;
		font-size: 1.3rem;

		:focus {
			border-color: rgba(var(--border-blue), 0.6);
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
