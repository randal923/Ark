import React, { Component } from 'react';

// Components
import Button from '../Button';
import Modal from '../Modal';

// Icons
import { MdCloudDownload, MdKeyboardArrowDown } from 'react-icons/md';

// Style
import { Container, LoginText, Country } from './styles';

class Login extends Component {
	state = {
		showModal: false,
	};

	handleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	countryDropDown() {
		alert('Countries will be coming soon');
	}

	installButton() {
		alert('Ark Software will be coming soon');
	}
	render() {
		return (
			<>
				<Container>
					<span>
						<LoginText>
							<a onClick={() => this.handleModal()}>Login</a>
							&nbsp; or &nbsp;
							<a onClick={() => this.handleModal()}>Create Account</a>
						</LoginText>
						<Country onClick={() => this.countryDropDown()}>
							Country <MdKeyboardArrowDown size={15} />
						</Country>
						<Button
							type="ark"
							label="Install Ark"
							icon={<MdCloudDownload />}
							onClick={() => this.installButton()}
						/>
					</span>
				</Container>
				{this.state.showModal && <Modal handleModal={this.handleModal} />}
			</>
		);
	}
}

export default Login;
