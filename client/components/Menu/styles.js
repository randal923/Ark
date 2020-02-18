import styled from 'styled-components';

import { breakPoints } from '../../global/breakpoints';

const Container = styled.div`
	a:first-child {
		margin-left: 4.5rem;
	}
	a {
		font-size: 2rem;
		color: #b3b3b3;
		text-decoration: none;
		margin-left: 2rem;

		:hover {
			text-shadow: 0px 0px 16px white;
			color: white;
		}
	}

	@media (max-width: ${breakPoints.mobile}) {
		display: none;
	} /* 600px */
`;

export { Container };
