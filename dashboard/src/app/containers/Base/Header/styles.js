import styled from 'styled-components';

export const Container = styled.div`
	background: var(--dark-grey);
	border-bottom: 1px solid var(--border-blue);
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

	a {
		margin: 2rem;
		text-decoration: none;
		color: white;
		font-size: 1.6rem;
		width: 4rem;
		:hover {
			color: var(--blue);
			cursor: pointer;
		}
	}

	span {
		margin: 2rem;
		justify-self: end;
		font-size: 1.6rem;
		:hover {
			color: var(--blue);
			cursor: pointer;
		}
	}
`;
