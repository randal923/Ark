import React, { Component } from 'react';

import { Container, Images } from './styles';

class ImageBlock extends Component {
	render() {
		const { handleSubmit, images, onRemove } = this.props;
		return (
			<Container>
				<input type="file" onChange={handleSubmit} />
				{images.map((src, index) => {
					return (
						<Images images={src} key={index}>
							<span onClick={() => onRemove(index)}>{'-'}</span>
						</Images>
					);
				})}
			</Container>
		);
	}
}

export default ImageBlock;
