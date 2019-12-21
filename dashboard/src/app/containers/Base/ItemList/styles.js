import styled, { css } from 'styled-components';

const Container = styled.div``;

const Active = styled.div`
	&:not(:first-child) {
			border-top: dotted 2px var(--border-blue);;
		}
	}
	a {
		text-decoration: none;
		font-size: 1.5rem;
		height: 5rem;
		color: var(--medium-text-color);
		font-weight: 500;
		line-height: 1.4rem;
		display: flex;
		align-items: center;
		&:hover {
			color: var(--blue);
		}
	}
	svg {
		margin: 0.3rem;
		height: 2.5rem;
		width: 2.5rem;
	}

	${props =>
		!props.open &&
		css`
			a {
				flex-direction: column;
				justify-content: center;
				font-size: 1.3rem;
				height: 7rem;
			}
		`}

	${props =>
		props.active &&
		css`
			a {
				color: var(--blue);
			}
		`}
`;
export { Container, Active };
