import React, { Component } from 'react';
import { MdClear, MdKeyboardArrowDown } from 'react-icons/md';

class Select extends Component {
	state = {
		dropdown: false,
	};

	render() {
		const { value, options, error } = this.props;

		const opt = (
			<div>
				{options
					? options.map((item, index) => {
							return <div key={index}>{item.name}</div>;
					  })
					: 'No Options'}
			</div>
		);

		return (
			<>
				<div onClick={() => this.setState({ dropdown: !this.state.dropdown })}>
					{value.map(item => {
						return (
							<span key={item}>
								{item}
								<MdClear />
							</span>
						);
					})}
					<MdKeyboardArrowDown />
				</div>
				{this.state.dropdown && opt}
				{error && <small>{error}</small>}
			</>
		);
	}
}

export default Select;
