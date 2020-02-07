import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 2.6rem 10rem 3.5rem;
	background: linear-gradient(#181f2d, #212225);
`;

const LogoStyle = styled.div`
	display: flex;
	align-items: center;
	h1 {
		font-size: 5rem;
	}
	> img {
		height: 8rem;
		width: 8rem;
	}
`;

export { Container, LogoStyle };
