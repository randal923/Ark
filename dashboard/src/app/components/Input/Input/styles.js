import styled from 'styled-components';

const Container = styled.div`
	input {
		margin: 1rem;
		background: #22252a;
		border-radius: 3px;
		height: 3rem;
		width: 90%;
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
`;

export { Container };
