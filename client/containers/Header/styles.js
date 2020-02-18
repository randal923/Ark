import styled from 'styled-components';
import { breakPoints } from '../../global/breakpoints';

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
			:nth-child(3) {
				text-shadow: 0px 0px 1px red;
				color: white;
			}
		}
	}
`;

export { Container, LogoStyle, MobileLogoStyle };
