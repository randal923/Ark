import styled from 'styled-components';

const Container = styled.div`
	margin: 2rem;
	font-size: 1.3rem;

	textarea {
		background: transparent;
		color: var(--medium-text-color);
		font: inherit;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	h1 {
		color: var(--light-text-color);
	}

	button {
		padding: 0.5rem 0.8rem;
		margin: 0.5rem;
	}
`;

const DropDown = styled.div`
	margin: 1rem;
	div {
		background: #22252a;
		border-radius: 3px;
		border: 1px solid transparent;
		color: var(--medium-text-color);
	}
	:hover,
	:focus {
		color: var(--blue);
	}
`;

const Images = styled.div``;

export { Container, Header, Images, DropDown };
