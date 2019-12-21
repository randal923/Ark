import styled, { css } from 'styled-components';

const Container = styled.div`
	background: var(--dark-grey);
	grid-row: 1/-1;
	display: grid;
	border-right: 1px solid var(--border-blue);
	grid-template-rows: 7rem 1fr;
`;

const LogoHeader = styled.span`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid var(--border-blue);

	svg {
		margin-left: 2rem;
		color: var(--medium-text-color);
		&:hover {
			color: var(--blue);
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
		color: var(--light-text-color);
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
