import styled from 'styled-components';

export const Container = styled.div`
	background: #2d3035;
	border-bottom: 1px solid #353a53;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

	a {
		margin: 1rem;
		text-decoration: none;
		color: white;
		font-size: 1.5rem;
	}

	span {
		margin: 1rem;
		justify-self: end;
		font-size: 1.5rem;
	}
`;
