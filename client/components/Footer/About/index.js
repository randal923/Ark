import React from 'react';
import Link from 'next/link';

const About = () => (
	<>
		<>
			<h3>Ark</h3>
			<Link href="/footer/about">
				<span>About Ark</span>
			</Link>
			<Link href="/footer/about">
				<span>Terms of Sale</span>
			</Link>
			<Link href="/footer/about">
				<span>Release Notes</span>
			</Link>
		</>
		<>
			<h3>Avalon Corporation</h3>
			<Link href="/footer/corporation">
				<span>Legal Notices</span>
			</Link>
			<Link href="/footer/corporation">
				<span>Terms of Service</span>
			</Link>
			<Link href="/footer/corporation">
				<span>Privacy Policy</span>
			</Link>
			<Link href="/footer/corporation">
				<span>Corporate Information</span>
			</Link>
		</>

		<>
			<h3>Customer Service</h3>
			<Link href="/footer/customer">
				<span>Help Center</span>
			</Link>
			<Link href="/footer/customer">
				<span>FAQs</span>
			</Link>
			<Link href="/footer/customer">
				<span>Constact Us</span>
			</Link>
		</>
	</>
);

export default About;
