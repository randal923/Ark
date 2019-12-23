import styled, { css } from 'styled-components';

const Container = styled.div`
	${props => {
		if (props.type === 'danger') {
			return css`
				button {
					border-radius: 0.2rem;
					color: #f45722;
					font-weight: 500;
					font-size: 1.3rem;
					padding: 0.6rem;
					background-color: initial;
					cursor: pointer;
					outline: none;
					user-select: none;
					border: 1px solid #f45722;

					:hover,
					:focus {
						background: #f45722;
						color: white;
					}
				}
			`;
		} else if (props.type === 'ark') {
			return css`
				button {
					color: var(--blue);
					background: transparent;
					padding: 0.5rem 0.8rem;
					margin: 0.5rem;
					border: 1px solid var(--blue);
					cursor: pointer;
					:hover {
						color: var(--light-text-color);
						background: var(--blue);
					}
				}
			`;
		}
	}}
`;

export { Container };
