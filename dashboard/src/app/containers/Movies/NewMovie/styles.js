import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem;
	align-items: center;
`;
const Data = styled.div``;

const DropDown = styled.div`
	margin: 1rem;
	div {
		background: #22252a;
		border-radius: 3px;
		border: 1px solid transparent;
		color: var(--medium-text-color);
		cursor: pointer;
		:hover,
		:focus {
			color: var(--blue);
		}
	}
`;
export { Container, Header, Data, DropDown };
