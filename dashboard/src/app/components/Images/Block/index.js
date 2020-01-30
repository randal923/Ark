import React, { Component } from 'react';
import { api } from '../../../config';
import { Container, Images, ImagesDiv } from './styles';
import Button from '../../Button';

class ImageBlock extends Component {
	render() {
		const { handleSubmit, images, onRemove } = this.props;
		return (
			<Container>
				<input type="file" onChange={handleSubmit} />
				{images.map((src, index) => {
					return (
						<Images style={{ backgroundImage: `url("${api}/public/images/${src}")` }} key={index}>
							<Button type="danger" label=" - " onClick={() => onRemove(index)} />
						</Images>
					);
				})}
			</Container>
		);
	}
}

export default ImageBlock;
