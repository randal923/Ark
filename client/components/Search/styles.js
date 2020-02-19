import styled from 'styled-components';

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	> input {
		background: #2e2e2e;
		border: 1px solid #232323;
		border-radius: 15px;
		width: 200px;
		height: 25px;
		color: white;
		padding: 0 0 0 10px;
	}
	> button {
		position: absolute;
		top: 0;
		right: 10px;
		background: transparent;
		border: 0;
		> svg {
			color: var(--blue);
		}
	}
`;

export { SearchContainer };
