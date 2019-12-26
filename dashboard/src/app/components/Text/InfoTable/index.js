import React from 'react';

const InfoTable = ({ name, value }) => {
	return (
		<div>
			<strong>{name}:&nbsp;</strong>
			<strong>{value}</strong>
		</div>
	);
};

export default InfoTable;
