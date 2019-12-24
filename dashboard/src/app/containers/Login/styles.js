import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.8);
`;
const ContainerCard = styled.div`
	background: linear-gradient(#232323, #1e1e1e);
	border: 1px solid rgba(0, 0, 0, 0.2);
	height: 27rem;
	padding: 2rem;
	width: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		align-self: center;
		margin: 0 0 1.5rem 0;
	}

	h3 {
		margin: 0.4rem 0.4rem 0 0.4rem;
	}

	> :last-child {
		width: 100%;
		button {
			width: 95%;
			margin: 0.4rem;
		}
	}

	button {
		background: linear-gradient(#4c9dde, #3d77a6);
		color: white;
		border: 0;
		height: 2.5rem;
		text-align: center;

		:hover,
		:focus {
			background: linear-gradient(#52abf1, #4c9dde);
		}
	}
`;

const LoginContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	color: #7c7c7c;

	input {
		background: #505050;
		border: 1px solid transparent;
		height: 2.2rem;
		color: white;
		font-weight: 500;
		border-radius: 2px;

		:focus {
			border-color: var(--blue);
		}
	}
	> :nth-child(2) input,
	> :nth-child(4) input {
		width: 95%;
		max-width: 40rem;
		margin: 0.4rem;
	}

	> :nth-child(4) {
		margin-bottom: 0.6rem;
	}

	> :last-child {
		display: flex;
		align-items: center;
		margin: 0 0 0.6rem 0.4rem;
		user-select: none;
		font-size: 1.2rem;
		cursor: pointer;
	}
`;

const PasswordRecovery = styled.div`
	margin: 1rem 1rem 2rem 1rem;
	a {
		color: var(--blue);
	}
`;
export { Container, PasswordRecovery, LoginContainer, ContainerCard };
