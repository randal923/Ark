import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { MdContentCopy, MdGroup, MdPerson, MdMovie, MdSettings } from 'react-icons/md';

const items = [
	{
		route: '/',
		icon: <MdContentCopy />,
		title: 'Orders',
	},
	{
		route: '/customers',
		icon: <MdGroup />,
		title: 'Customers',
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
		route: '/Profile',
		icon: <MdPerson />,
		title: 'Profile',
	},
];

const ItemList = ({ open, history }) => {
	return (
		<Container>
			{items.map((item, index) => {
				return (
					<Link to={item.route} key={index}>
						{item.icon}
						{open && <span>{item.title}</span>}
					</Link>
				);
			})}
		</Container>
	);
};

export default ItemList;
