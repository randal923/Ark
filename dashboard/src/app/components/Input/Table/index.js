import React from 'react';
import { Container } from './styles';
import Button from '../../Button';

const Table = ({ header, data, buttonType, buttonLabel }) => {
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
									return (
										<td key={i}>
											{row[item] === row['Action'] ? (
												<Button
													type={buttonType}
													label={buttonLabel}
													route={row['Action']}
												></Button>
											) : (
												''
											)}
											{row[item] && row[item] !== row['Action'] ? row[item] : ''}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</Container>
	);
};

export default Table;
