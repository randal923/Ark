import styled, { css, keyframes } from 'styled-components';
import { breakPoints } from '../../global/breakpoints';

const fadeOut = keyframes`
	from {
		opacity: 100%;
	}

  to {
	opacity: 0%;
  }
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 2.6rem 10rem 3.5rem;
	background: linear-gradient(#181f2d, #212225);

	@media (max-width: ${breakPoints.mobile}) {
		grid-template-columns: 1fr;
		grid-template-rows: 3.5rem 1fr;
	}
`;

const LogoStyle = styled.div`
	display: flex;
	align-items: center;
	h1 {
		font-size: 5rem;
	}
	> img {
		height: 80px;
		width: 80px;
	}

	@media (max-width: ${breakPoints.mobile}) {
		display: none;
	}
`;
const MobileLogoStyle = styled.div`
	display: none;

	@media (max-width: ${breakPoints.mobile}) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: rgba(0, 0, 0, 0.92);

		img {
			height: 30px;
			width: 30px;
		}

		svg {
			margin-right: 10px;
			margin-left: 10px;
			${props => {
				if (props.show) {
					return css`
						:nth-child(3) {
							animation: ${fadeOut} 0.5s linear;
							animation-fill-mode: forwards;
						}
					`;
				}
			}}
		}
	}
`;

const MenuBurger = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	cursor: pointer;
	transition: all 0.4s ease-in-out;
	margin-left: 10px;
`;

const Burger = styled.div`
	width: 15px;
	height: 1px;
	background: transparent;
	transition: all 0.4s ease-in-out;

	::before,
	::after {
		content: '';
		position: absolute;
		width: 15px;
		height: 1px;
		background: white;
		transition: all 0.4s ease-in-out;
	}

	::before {
		transform: translateY(-3px);
	}

	::after {
		transform: translateY(3px);
	}

	${props => {
		if (props.show) {
			return css`
				background: transparent;

				::before {
					transform: rotate(45deg);
				}
				::after {
					transform: rotate(-45deg);
				}
			`;
		}
	}}
`;

export { Container, LogoStyle, MobileLogoStyle, MenuBurger, Burger };
