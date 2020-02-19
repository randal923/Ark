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
		display: none;
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

export { Container, Menu, DropDown, DropDownContent };
