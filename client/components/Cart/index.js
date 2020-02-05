import React, { Component } from 'react';
import Link from 'next/link';

class Cart extends Component {
	state = {
		quantity: 0,
	};
	render() {
		return (
			<>
				<Link href="/user">
					<span>My Account</span>
				</Link>
				<Link href="/cart">
					<span>{this.state.quantity || 0}</span>
				</Link>
			</>
		);
	}
}

export default Cart;
