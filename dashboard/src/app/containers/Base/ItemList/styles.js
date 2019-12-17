import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	a {
		text-decoration: none;
		width: 100%;
		font-size: 1.6rem;
		color: #898e9a;
		font-weight: 500;
		line-height: 1.4rem;
		height: 5rem;
		display: flex;
		align-items: center;
		&:hover {
			color: #7560c2;
		}
	}

	span {
		border-top: dotted 2px #353a53;
		width: 100%;
		height: 100%;
	}

	svg {
		margin: 0.3rem;
		width: 2.2rem;
		height: 100%;
	}
`;
