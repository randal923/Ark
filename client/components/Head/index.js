import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '/ark-logo.svg';

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ''}</title>
		<meta name="description" content={props.description || defaultDescription} />
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
		<link rel="icon" href="/favicon.ico" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<meta property="twitter:site" content={props.url || defaultOGURL} />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="600" />
		<meta property="og:image:height" content="600" />
		<link rel="stylesheet" href="/style.css" />
		{props.children}
	</NextHead>
);

Head.propsTypes = {
	title: string,
	description: string,
	url: string,
	ogImage: string,
};

export default Head;
