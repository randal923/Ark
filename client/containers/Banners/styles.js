import styled from 'styled-components';
import { breakPoints } from '../../global/breakpoints';

const Container = styled.div``;

const Banner = styled.div`
	margin: 0.5rem 0;
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;

	img {
		width: 100%;
		box-shadow: 0 0 10px black;

		:hover {
			cursor: pointer;
		}
	}

	svg {
		background: rgba(0, 0, 0, 0.4);
		height: 90%;
		:hover {
			background: rgba(0, 0, 0, 0.8);
			cursor: pointer;
			color: var(--blue);
		}
		:nth-child(1) {
			position: absolute;
		}
		:nth-child(3) {
			position: absolute;
			right: 0;
		}
	}

	@media (max-width: ${breakPoints.mobile}) {
		img {
			height: 200px;
		}
		svg {
			width: 25px;
		}
	}
`;

export { Container, Banner };
