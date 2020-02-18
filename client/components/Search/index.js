import React, { Component } from 'react';

// Icons
import { MdSearch } from 'react-icons/md';

// Style
import { Container } from './styles';

class Search extends Component {
	state = {
		search: '',
	};

	searchSubmit() {
		console.log(this.state.search);
	}
	render() {
		return (
			<Container>
				<input
					name="search"
					value={this.state.search}
					onChange={e => this.setState({ search: e.target.value })}
					placeholder="Search for movies here..."
				/>
				<button onClick={() => this.searchSubmit()}>
					<MdSearch size={25} />
				</button>
			</Container>
		);
	}
}

export default Search;
