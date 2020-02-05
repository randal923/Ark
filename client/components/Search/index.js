import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';

class Search extends Component {
	state = {
		search: '',
	};

	searchSubmit() {
		console.log(this.state.search);
	}
	render() {
		return (
			<>
				<input
					name="search"
					value={this.state.search}
					onChange={e => this.setState({ search: e.target.value })}
					placeholder="Search for movies here..."
				/>
				<button onClick={() => this.searchSubmit()}>
					<MdSearch />
				</button>
			</>
		);
	}
}

export default Search;
