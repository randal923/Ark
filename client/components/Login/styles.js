import styled from 'styled-components';

const Container = styled.span`
	grid-column: 2 / span 3;
	justify-self: end;
	a {
		color: var(--blue);
		text-decoration: none;
		:hover {
			color: var(--light-text-color);
		}
	}

	> span {
		display: flex;
		align-items: center;
		background: #353535;
		padding-left: 1rem;
		border-radius: 0.4rem;
	}

	div {
		display: flex;
		align-items: center;
		margin: 0.5rem;
		:hover {
			color: var(--blue);
		}
		svg {
			color: var(--blue);
		}
	}
`;

const LoginText = styled.span`
	border-right: 1px solid #454545;
	padding-right: 0.5rem;
`;

export { Container, LoginText };
