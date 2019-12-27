import React, { Component } from 'react';

import moment from 'moment';
import { Container } from './styles';

import Title from '../../components/Text/Title';
import Table from '../../components/Input/Table';
import Card from '../../components/Card';

class Reviews extends Component {
	render() {
		const data = [
			{
				User: 'User 1',
				Date: moment().format('DD/MM/YYYY'),
				Action: '/review/asdf123afsxcv',
			},
			{
				User: 'User 1',
				Date: moment().format('DD/MM/YYYY'),
				Action: '/review/asdf123aasczxczxcv',
			},
			{
				User: 'User 1',
				Date: moment().format('DD/MM/YYYY'),
				Action: '/review/asdf123zxczxczwerf',
			},
			{
				User: 'User 1',
				Date: moment().format('DD/MM/YYYY'),
				Action: '/review/asdfwerwt23512xcv',
			},
			{
				User: 'User 1',
				Date: moment().format('DD/MM/YYYY'),
				Action: '/review/asdf12cvbcvbcvbxcv',
			},
		];
		return (
			<Card size={'100vh'}>
				<Container>
					<Title type="h2" title="Reviews - Movie 1" />
					<br />
					<Table header={['User', 'Date', 'Action']} data={data} buttonType={'ark'} buttonLabel={'View'} />
				</Container>
			</Card>
		);
	}
}

export default Reviews;
