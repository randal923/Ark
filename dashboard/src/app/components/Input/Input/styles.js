import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	margin: 1rem;

	label {
		margin-bottom: 0.6rem;
		font-weight: bold;
		font-size: 1.4rem;
		color: var(--medium-text-color);
	}
	input {
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

		:focus,
		:hover {
			border-color: var(--blue);
		}
	}
`;

export { Container };
