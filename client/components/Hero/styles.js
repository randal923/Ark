import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin: 3.5rem;
	img {
		height: 25rem;
	}
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	margin: -2.2rem 1rem 1rem 1rem;

	h1 {
		margin-right: 1rem;
	}

	span {
		font-size: 1.5rem;
		margin-right: 1rem;
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
const Info = styled.div``;
const Cast = styled.div``;
const Details = styled.div``;
const Links = styled.div``;

export { Container, Star, Header, Info, Cast, Details, Links };
