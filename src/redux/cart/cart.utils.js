export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItemsToAdd.id === cartItem.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemToCart = (cartItems, cartItemsToRemove) => {
  if (cartItemsToRemove.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemsToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        : cartItem
    );
  } else {
    // remove item to cart
    return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id);
  }
};
