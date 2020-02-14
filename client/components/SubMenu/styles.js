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
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 15fr 1fr;
	align-items: center;
	justify-items: center;

	img {
		display: none;
	}

	> svg:first-child {
		background: #383737;
		color: white;
		padding: 2px;
		border: 1px solid #323232;
	}
	svg {
		color: var(--blue);
	}
`;

const Menu = styled.div`
	a {
		font-size: 1.6rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;

		:not(:last-child) {
			margin-right: 1.5rem;
		}

		:hover {
			color: white;
		}
	}

	@media (max-width: 56.25em) {
		font-size: 1.3rem;
	} /* 900px */
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
		top: 0rem;
		right: 1rem;
		background: transparent;
		border: 0;
	}
`;

const DropDown = styled.span`
	position: relative;
	display: inline-block;

	:hover .dropdown-content {
		display: block;
	}
`;
const DropDownContent = styled.span`
	display: none;
	position: absolute;
	background-color: var(--background);
	min-width: 12rem;
	box-shadow: 0px 0.8rem 1.6rem 0px rgba(0, 0, 0, 0.2);
	padding: 1.2rem 1.6rem;
	z-index: 1;

	> div {
		display: flex;
		flex-direction: column;
		margin: 0.5rem;
	}
`;

export { Container, Search, Menu, DropDown, DropDownContent };
