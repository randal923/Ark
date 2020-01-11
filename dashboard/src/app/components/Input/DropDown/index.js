import React from 'react';
import { Container } from './styles';
import Select from 'react-select';

const DropDown = ({ field, placeholder, fields }) => {
	return (
		<Select
			placeholder="Select Director"
			options={(fields ? fields : []).map(item => ({ value: item.name, label: item.name }))}
			onChange={e => this.addCastToState('directors', e.value)}
		/>
	);
};

export default DropDown;
