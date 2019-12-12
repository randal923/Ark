const getCartValue = cart => {
	let totalPrice = 0;

	cart.forEach(item => {
		if (!item.salePrice) item.salePrice = 0;
		totalPrice += item.unitPrice - (unitPrice - salePrice);
	});

	return { totalPrice };
};

const CartValidation = async cart => {
	const { totalPrice: totalPriceCart } = await getCartValue(cart);

	return totalPriceCart;
};

module.exports = CartValidation;
