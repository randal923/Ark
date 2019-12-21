import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
	${props =>
		props.type === 'danger' &&
		css`
			background: red;
			color: white;
		`}
`;

const LinkContainer = styled.div`
	${props =>
		props.type === 'danger' &&
		css`
			background: red;
			color: white;
		`}
`;

export { LinkContainer, ButtonContainer };
