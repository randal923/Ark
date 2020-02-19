import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		min-height: 0%;
	}

	to {
		min-height: 100vh;
	}
`;

const Content = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 35px;
	z-index: 4;
	background: rgba(0, 0, 0, 0.92);
	animation: ${fadeIn} 0.3s linear;
	animation-fill-mode: forwards;

	a {
		text-decoration: none;
		color: var(--ligh-text-color);
		font-size: 1.7rem;
		padding: 0.5rem 1rem;
		width: 100%;
		border-bottom: 1px solid rgba(69, 69, 69, 0.2);
		:hover,
		:focus {
			cursor: pointer;
			color: var(--blue);
		}
	}

	input {
		border-radius: 3px;
		width: 100%;
		margin: 10px;
	}
	button {
		top: 10px;
		right: 15px;
	}
`;

export { Content };
