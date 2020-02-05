import React from 'react';

// Components
import Button from '../Button';

// Icons
import { MdCloudDownload, MdKeyboardArrowDown } from 'react-icons/md';

// Style
import { Container, LoginText } from './styles';

const Login = () => (
	<Container>
		<span>
			<LoginText>
				<a href="/">Login</a>
				&nbsp; or &nbsp;
				<a href="/">Create Account</a>
			</LoginText>
			<div>
				Country <MdKeyboardArrowDown size={15} />
			</div>
			<Button type="ark" label="Install Ark" icon={<MdCloudDownload />} />
		</span>
	</Container>
);

export default Login;
