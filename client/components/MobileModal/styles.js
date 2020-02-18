import styled from 'styled-components';

const Container = styled.div``;

const BackDrop = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	min-height: 100%;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 20rem;
	min-height: 100%;
	z-index: 4;
	border-right: 1px solid rgba(0, 165, 255, 0.3);
	background: linear-gradient(#1f1f1f, #242424);
	transition: background 0.25s, color 0.25s;
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
`;

export { Container, Content, BackDrop };
