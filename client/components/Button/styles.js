import styled, { css } from 'styled-components';

const Container = styled.span`
	button {
		display: flex;
		align-items: center;
		cursor: pointer;
		user-select: none;
		font-weight: 500;
		font-size: 1.3rem;
		border-radius: 0.1rem;
		padding: 0.5rem;
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
					color: white;
					background: linear-gradient(#50a1e1, #3c78a6);
					border: none;
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
