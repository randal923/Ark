import styled from 'styled-components';

const Container = styled.div`
	input {
		background: #22252a;
		border-radius: 3px;
		height: 3rem;
		border: 1px solid var(--ark-light-grey);
		color: var(--medium-text-color);
		padding: 1.4rem 2rem 1.6rem;
		font-size: 1.3rem;
		font-weight: 500;

		:focus {
			border-color: rgba(var(--border-blue), 0.6);
		}
	}
`;

export { Container };
