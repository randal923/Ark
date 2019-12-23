import React, { Component } from 'react';
import { Container } from './styles';
import { MdSearch } from 'react-icons/md';

class Search extends Component {
	handleKeyDown = e => {
		const { onClick } = this.props;
		if (e.key === 'Enter') {
			onClick();
		}
	};
	render() {
		const { value, onChange, placeHolder, onClick } = this.props;
		return (
			<Container>
				<input value={value} onChange={onChange} placeholder={placeHolder} onKeyDown={this.handleKeyDown} />
				<button onClick={onClick}>
					<MdSearch size={30} />
				</button>
			</Container>
		);
	}
}

export default Search;
