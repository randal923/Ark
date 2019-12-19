import React from 'react';
import { Container } from './styles';
import { MdSearch } from 'react-icons/md';
const Search = ({ value, onChange, placeHolder, onClick }) => {
	return (
		<Container>
			<input value={value} onChange={onChange} placeholder={placeHolder} />
			<button onClick={onClick}>
				<MdSearch />
			</button>
		</Container>
	);
};

export default Search;
