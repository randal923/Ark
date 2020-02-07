import styled from 'styled-components';

const Container = styled.div`
	background: linear-gradient(#393939, #424242);
	width: 100%;
	border-radius: 1rem;
	border-style: groove;
	border-width: 1px;
	border-color: #171717;
	height: 3.5rem;
	font-family: Arial;
	padding: 0 1rem 0 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	a {
		font-size: 1.6rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		margin: 1rem;
		display: flex;
		align-items: center;

		:hover {
			color: white;
		}
	}

	span {
		position: absolute;
		right: 1rem;
	}

	> svg:first-child {
		position: absolute;
		left: 1.5rem;
		background: #383737;
		color: white;
		padding: 2px;
		border: 1px solid #323232;
	}
	svg {
		color: var(--blue);
	}
`;

const Search = styled.span`
	display: flex;
	align-items: center;
	position: relative;

	input {
		background: #2e2e2e;
		border: 1px solid #232323;
		border-radius: 1.5rem;
		width: 20rem;
		height: 2.5rem;
		color: white;
		padding: 0 0 0 10px;
	}

	button {
		position: absolute;
		top: -1.3rem;
		right: 2rem;
		background: transparent;
		border: 0;
	}
`;

export { Container, Search };
