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
					return (
						<Container key={index}>
							<span>{item}</span>
							{onRemove && <Button type="danger" onClick={() => onRemove(index)} label=" - " />}
						</Container>
					);
				})}
				<Container>
					<Input type="text" value={text} onChange={this.onChangeInput} placeholder={'Add Payment Status'} />
					<Button type="success" onClick={() => onAdd(text)} label=" + " />
				</Container>
			</>
		);
	}
}

export default DynamicList;
