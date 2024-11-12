export let cart = [
	{
		//deduplicating the data. No need to save every property since we have the product id
		productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
		quantity: 2,
	},
	{
		productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
		quantity: 1,
	},
];

export function addToCart(productId) {
	let matchingItem;
	//checking if the product exist in the cart.
	cart.forEach((cartItem) => {
		if (productId === cartItem.productId) {
			matchingItem = cartItem;
		}
	});
	if (matchingItem) {
		matchingItem.quantity += 1;
	} else {
		cart.push({
			productId: productId,
			quantity: 1,
		});
	}
}

export function removeFromCart(productId) {
	const newCart = [];
	cart.forEach((cartItem) => {
		if (cartItem.productId !== productId) {
			newCart.push(cartItem);
		}
	});
	cart = newCart;
}
