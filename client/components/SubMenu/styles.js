import styled from 'styled-components';
import { breakPoints } from '../../global/breakpoints';

const Container = styled.div`
	background: linear-gradient(#393939, #424242);
	min-width: 100%;
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
	svg {
		color: var(--blue);
		:hover {
			cursor: pointer;
			color: white;
		}
	}

	@media (max-width: ${breakPoints.mobile}) {
		grid-template-columns: 1fr 1fr;
		align-self: center;
		border-radius: 0;
		border-width: 0;

		svg {
			justify-self: start;
		}
	} /* 600px */
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

	@media (max-width: 37.5em) {
		display: none;
	} /* 600px */
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

	@media (max-width: ${breakPoints.mobile}) {
		justify-self: end;
	} /* 600px */
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

const MobileSubMenu = styled.div`
	display: none;
	@media (max-width: ${breakPoints.mobile}) {
		display: block;
		display: flex;
		flex-direction: column;
		a {
			font-size: 1.5rem;
			color: var(--light-text-color);
			width: 100%;
			background: #393939;
			text-decoration: none;
			padding: 0.7rem;
			border-bottom: 1px solid rgba(69, 69, 69, 0.4);

			:hover,
			:focus {
				color: white;
				background: var(--blue);
			}
		}
	} /* 600px */
`;

export { Container, Search, Menu, DropDown, DropDownContent, MobileSubMenu };
