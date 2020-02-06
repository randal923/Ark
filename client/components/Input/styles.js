import styled from 'styled-components';

const Container = styled.span`
	input {
		background: #343638;
		border-radius: 3px;
		height: 2rem;
		width: 80%;
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
