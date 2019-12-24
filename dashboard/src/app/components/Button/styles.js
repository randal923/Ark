import styled, { css } from 'styled-components';

const Container = styled.div`
	button {
		background: transparent;
		cursor: pointer;
		user-select: none;
		font-weight: 500;
		font-size: 1.3rem;
		border-radius: 0.2rem;
	}
	${props => {
		if (props.type === 'danger') {
			return css`
				button {
					color: var(--danger);
					border: 1px solid var(--danger);

					:hover,
					:focus {
						background: var(--danger);
						color: var(--danger-hover);
					}
				}
			`;
		} else if (props.type === 'ark') {
			return css`
				button {
					color: var(--blue);
					border: 1px solid var(--blue);
					:hover {
						color: var(--light-text-color);
						background: var(--blue);
					}
				}
			`;
		} else if (props.type === 'success') {
			return css`
				button {
					color: var(--success);
					border: 1px solid var(--success);
					:hover {
						color: var(--success-hover);
						background: var(--success);
					}
				}
			`;
		} else if (props.type === 'warning') {
			return css`
				button {
					color: var(--warning);
					border: 1px solid var(--warning);
					:hover {
						color: var(--warning-hover);
						background: var(--warning);
					}
				}
			`;
		}
	}}
`;

export { Container };
