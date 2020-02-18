import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin: 5.5rem 3.5rem;
	img {
		min-height: 25rem;
		height: 100%;
		width: auto;
		box-shadow: 0 0 4px black;
	}
`;
const Header = styled.div`
	display: flex;
	align-items: center;

	h1 {
		margin-right: 1rem;
	}

	> span {
		font-size: 1.5rem;
		margin-right: 1rem;
		color: var(--medium-text-color);
	}
`;
const Star = styled.div`
	position: relative;
	svg {
		color: #0190de;
	}
	span {
		position: absolute;
		top: 22px;
		left: 21px;
		z-index: 1;
		font-size: 1.5rem;
		font-weight: bold;
	}
`;
const Links = styled.div`
	margin-left: auto;
	background: linear-gradient(to left, #282828 90%, var(--darker-grey));
	padding: 0.3rem 0.3rem 0.3rem 2rem;
	border-radius: 1rem;

	a {
		text-decoration: none;
		color: var(--blue);
		font-size: 1.6rem;
		font-weight: bold;
		margin-right: 0.6rem;

		:hover {
			color: var(--light-text-color);
		}
	}
`;
const Info = styled.div`
	span {
		margin-right: 0.5rem;
		color: var(--medium-text-color);
		:first-child {
			font-size: 1.4rem;
			font-weight: bold;
			color: var(--light-text-color);
			padding: 0.3rem 0.5rem;
			background: var(--blue);
			border-radius: 0.3rem;
		}
	}
	a {
		color: var(--blue);
		text-decoration: none;
		:hover {
			color: var(--light-text-color);
		}
	}
`;

const Cast = styled.div`
	display: flex;
	flex-direction: column;

	a {
		color: var(--blue);
		text-decoration: none;
		:hover {
			color: var(--light-text-color);
		}
	}
`;

const Details = styled.div`
	width: 100%;
`;

const ButtonContainer = styled.div`
	display: flex;

	p {
		word-wrap: break-word;
		color: var(--medium-text-color);
	}
`;

const Payment = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-left: auto;
	button {
		margin: 0.5rem;
		text-transform: uppercase;
		border-radius: 0.4rem;
		font-size: 1.3rem;
		font-weight: bold;
		min-width: 20rem;
		color: white;
		:first-child {
			background: linear-gradient(#50a1e1, #3c78a6);
		}
		background: linear-gradient(#866869, #4d3e3f);
		border: none;
		padding: 0.7rem;
		box-shadow: 0 0 4px black;
		:hover {
			color: var(--light-text-color);
			background: #786060;
			cursor: pointer;
			:first-child {
				background: var(--blue);
			}
		}
	}
`;

export { Container, Star, Header, Info, Cast, Details, Links, ButtonContainer, Payment };
