import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin: 1rem;
	flex: 1;

	span {
		:hover {
			cursor: pointer;
			color: var(--blue);
		}
	}
`;
const Ark = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;
const Avalon = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;
const Customer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem;
`;

export { Container, Ark, Avalon, Customer };
