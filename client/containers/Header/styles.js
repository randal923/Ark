import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	background: linear-gradient(#181f2d, #212225);
`;

const LogoStyle = styled.span`
	display: flex;
	align-items: center;
	margin: 3.5rem 1.5rem 0 1.5rem;
	h1 {
		font-size: 5rem;
	}
	> img {
		height: 8rem;
		width: 8rem;
	}
`;

export { Container, LogoStyle };
