import styled, { css } from 'styled-components';

const Container = styled.div`
	background: #27293d;
	grid-row: 1/-1;
	display: grid;
	border-right: 1px solid #353a53;
	grid-template-rows: 7rem 1fr;
`;

const LogoHeader = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid #353a53;

	svg {
		margin-left: 2rem;
		&:hover {
			color: #7560c2;
			cursor: pointer;
		}
	}

	img {
		width: 5rem;
		height: 5rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 500;
		line-height: 6rem;
	}

	${props =>
		!props.open &&
		css`
			h1 {
				display: none;
			}
			svg {
				margin: 0 0.5rem;
			}
		`}
`;

export { Container, LogoHeader };
