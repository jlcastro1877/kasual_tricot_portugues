// Helper function to add decimals
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // Calculate items price
  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate shipping price
  const shippingPrice = itemsPrice > 100 ? 0 : 10;

  // Calculate tax price
  const taxPrice = 0.05 * itemsPrice;

  // Calculate total price
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  // Update state with formatted prices
  state.itemsPrice = addDecimals(itemsPrice);
  state.shippingPrice = addDecimals(shippingPrice);
  state.taxPrice = addDecimals(taxPrice);
  state.totalPrice = addDecimals(totalPrice);

  // Save cart to local storage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
