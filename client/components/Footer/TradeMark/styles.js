import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex: 1;
	padding: 1rem;
	border-left: 1px solid #454545;
	img {
		height: 8rem;
		width: 8rem;
	}
`;

const Text = styled.div`
	width: 20rem;
`;

const FooterLogo = styled.div`
	display: flex;
	align-items: center;
`;
export { Container, FooterLogo, Text };
