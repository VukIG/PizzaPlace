export const updateCartItems = (newCartItems) => ({
  type: 'UPDATE_CART_ITEMS',
  payload: newCartItems,
});

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const incrementItem = (id) => ({
  type: 'INCREMENT_ITEM',
  payload: id,
});

export const decrementItem = (id) => ({
  type: 'DECREMENT_ITEM',
  payload: id,
});
