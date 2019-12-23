import styled from 'styled-components';

const Container = styled.div`
	margin: 2rem;
	table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
	}
	thead {
		color: var(--light-text-color);
		font-size: 1.5rem;
		font-weight: 700;
	}
	tbody {
		color: var(--medium-text-color);
		font-size: 1.2rem;
	}

	td,
	th {
		padding: 6px;
		border-bottom: 1px solid var(--border-blue);
		text-align: center;
	}
`;

export { Container };
