import styled from 'styled-components';

const Container = styled.div`
	background: linear-gradient(#393939, #424242);
	width: 100%;
	grid-column: 1 / span 3;
	align-self: center;
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

	a {
		font-size: 1.6rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		margin: 1rem;

		:hover {
			color: white;
		}
	}

	span {
		margin-left: auto;
	}
	input {
		background: #2e2e2e;
		border: 1px solid #232323;
		border-radius: 15px;
		width: 100%;
		height: 25px;
		color: white;
		padding: 0 0 0 10px;
	}

	svg:first-child {
		margin-right: auto;
		background: #383737;
		padding: 2px;
		border: 1px solid #323232;
	}

	svg {
		margin-right: 3rem;
	}
`;

const Search = styled.span``;

export { Container, Search };
