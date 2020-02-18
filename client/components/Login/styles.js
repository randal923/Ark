import styled from 'styled-components';

const Container = styled.span`
	display: flex;
	align-items: center;
	width: 29.8rem;
	background: #353535;
	padding-left: 1rem;
	border-radius: 0.4rem;
	justify-self: end;
	margin-right: 2rem;
	a {
		color: var(--blue);
		text-decoration: none;
		:hover {
			color: var(--light-text-color);
		}
	}

	@media (max-width: 37.5em) {
		display: none;
	} /* 600px */
`;

const LoginText = styled.span`
	border-right: 1px solid #454545;
	padding-right: 0.5rem;
`;

const Country = styled.span`
	display: flex;
	align-items: center;
	margin: 0.5rem;
	:hover {
		color: var(--blue);
		cursor: pointer;
	}
	svg {
		color: var(--blue);
	}
`;

export { Container, LoginText, Country };
