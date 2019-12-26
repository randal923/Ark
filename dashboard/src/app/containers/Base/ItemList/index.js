import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Active } from './styles';

import { MdContentCopy, MdGroup, MdPerson, MdMovie, MdSettings, MdStyle } from 'react-icons/md';

const items = [
	{
		route: '/',
		icon: <MdContentCopy />,
		title: 'Orders',
	},
	{
		route: '/users',
		icon: <MdGroup />,
		title: 'Users',
	},
	{
		route: '/genres',
		icon: <MdStyle />,
		title: 'Genres',
	},
	{
		route: '/movies',
		icon: <MdMovie />,
		title: 'Movies',
	},
	{
		route: '/settings',
		icon: <MdSettings />,
		title: 'Settings',
	},
	{
		route: '/profile',
		icon: <MdPerson />,
		title: 'Profile',
	},
];

class ItemList extends Component {
	render() {
		const { open, history } = this.props;
		const pathName = history.location.pathname;

		return (
			<Container>
				{items.map((item, index) => {
					return (
						<Active open={open} active={item.route === pathName} key={index}>
							<Link to={item.route} key={index}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</Active>
					);
				})}
			</Container>
		);
	}
}

export default ItemList;
