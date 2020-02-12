import styled, { css } from 'styled-components';

const Container = styled.div`
	margin: 0.5rem;
`;
const MovieItem = styled.div`
	width: 17rem;
	transition: transform 2s;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		height: 25rem;
		box-shadow: 0 0 4px black;

		:hover {
			cursor: pointer;
			box-shadow: 0 0 7px black;
			transform: scale(1.2);
		}
	}
`;
const Title = styled.div`
	text-align: center;
	margin: 0.5rem;
`;
const Price = styled.div`
	color: var(--medium-text-color);
`;

export { Container, MovieItem, Title, Price };
