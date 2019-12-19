import React from 'react';
import { Container, Active } from './styles';

const Pagination = ({ offset, total, limit, onClick }) => {
	const numberOfPages = Math.ceil(total / limit);
	return (
		<Container>
			{[...Array(numberOfPages).keys()].map((pageNumber, index) => {
				const currentPageNumber = pageNumber * limit;
				return (
					<Active key={index} onClick={() => onClick(currentPageNumber)}>
						{pageNumber + 1}
					</Active>
				);
			})}
		</Container>
	);
};

export default Pagination;
