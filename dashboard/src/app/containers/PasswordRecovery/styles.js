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

const Content = styled.div`
	background: linear-gradient(#232323, #1e1e1e);
	border: 1px solid rgba(0, 0, 0, 0.2);
	height: 27rem;
	padding: 2rem;
	width: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	h1 {
		margin-bottom: 1rem;
		align-self: center;
	}

	> :last-child {
		width: 100%;
		button {
			background: linear-gradient(#4c9dde, #3d77a6);
			color: white;
			border: 0;
			height: 2.5rem;
			margin: 1rem;
			text-align: center;
			width: 95%;

			:hover,
			:focus {
				background: linear-gradient(#52abf1, #4c9dde);
			}
		}
	}
`;

const ResetPassword = styled.div`
	margin: 1rem;
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
		width: 95%;
		margin: 0.4rem 0;

		:focus {
			border-color: var(--blue);
		}
	}
`;

export { Container, Content, ResetPassword };
