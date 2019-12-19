import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const Table = ({ header, data }) => {
	return (
		<Container>
			<table>
				<thead>
					<tr>
						{header.map((item, index) => {
							return <th key={index}>{item}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => {
						return (
							<tr key={index}>
								{header.map((item, i) => {
									return <td key={i}>{row[item] ? row[item] : ''}</td>;
								})}
								;
								{row['detailsButton'] && (
									<td>
										<Link to={'detailsButton'}>
											<button>DETAILS</button>
										</Link>
									</td>
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</Container>
	);
};

export default Table;
