export const ADD_CART = 'ADD_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const QUANTITY_PLUS = 'QUANTITY_PLUS';

export const addCart = (name) => ({
  type: ADD_CART,
  // newValue: newValue
  // shorthand property (ES6)
  name,
});

export const updateQuantity = (id, data) => ({
  type: UPDATE_QUANTITY,
  id,
  data,
});

export const quantityPlus = (id) => ({
  type: QUANTITY_PLUS,
  id,
});
