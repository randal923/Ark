import React, { Component } from 'react';
import { Container } from './styles';

import Button from '../Button';
import Input from '../Input/Input';

class DynamicList extends Component {
	state = {
		text: '',
	};

	onChangeInput = e => this.setState({ text: e.target.value });
	render() {
		const { data, onAdd, onRemove } = this.props;
		const { text } = this.state;
		return (
			<>
				{data.map((item, index) => {
					<Container key={index}>
						<span>{text}</span>
						<Button type="danger" onCLick={() => onRemove(index)} label=" - " />
					</Container>;
				})}

				{data.map((item, index) => {
					<Container key={index}>
						<Input type="text" value={text} onChange={this.onChangeInput} />
						<Button type="success" onCLick={() => onAdd(text)} label=" + " />
					</Container>;
				})}
			</>
		);
	}
}

export default DynamicList;
