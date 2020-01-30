import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	margin: 2rem;

	h2 {
		margin-left: 1rem;
	}
	button {
		padding: 0.5rem 0.8rem;
	}
	> :last-child {
		justify-self: end;
	}

	a {
		color: var(--blue);
	}
`;
const OrderBy = styled.div`
	select {
		background: #22252a;
		color: white;
		border: 0;
		padding: 0.5rem;

		:hover {
			cursor: pointer;
		}
	}
`;

const Order = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem;
	justify-content: space-between;
	font-size: 1.3rem;
`;

export { Container, OrderBy, Order };
