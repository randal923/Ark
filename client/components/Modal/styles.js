import styled from 'styled-components';

const Container = styled.div``;

const BackDrop = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	z-index: 2;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
	background: linear-gradient(#1f1f1f, #242424);
	border: 1px solid rgba(0, 166, 255, 0.4);
	border-radius: 5px;
	width: 60rem;
	height: 40rem;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;
`;

const Login = styled.div`
	width: 90%;
	height: 23rem;
	padding: 1rem;
	border-right: 1px solid #454545;
	margin-bottom: 8rem;

	h3:first-child {
		margin-bottom: 1.5rem;
	}
	img {
		height: 5rem;
		width: 5rem;
	}

	input {
		margin: 0.5rem 0 1rem 0;
		width: 80%;
	}

	button {
		margin-left: 14.8rem;
		border-radius: 0.2rem;
	}
`;

const LogoStyle = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3.5rem;

	> img {
		height: 7rem;
		width: 7rem;
	}

	h1 {
		font-size: 4rem;
	}
`;

const Create = styled.div`
	width: 100%;
	height: 23rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	justify-items: center;
	margin-bottom: 8rem;

	h3:first-child {
		margin-bottom: 1.5rem;
		justify-self: start;
	}
	button {
		padding: 1.2rem 2.5rem;
		font-weight: 600;
		margin: 2rem;
		font-size: 1.8rem;
		border-radius: 0.2rem;
	}

	p {
		margin-bottom: 1rem;
		color: var(--medium-text-color);
	}
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	label {
		display: block;
		margin-bottom: 0.5rem;
	}
`;

export { Container, Content, Login, Create, BackDrop, LogoStyle, Form };
