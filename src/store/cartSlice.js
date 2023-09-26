import { createSlice } from '@reduxjs/toolkit';
import data from '../mockData';
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('items')) || [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const updatedCartRemove = state.cartItems.filter((item) => item.id !== action.payload);
      localStorage.setItem('items', JSON.stringify(updatedCartRemove));
      state.cartItems = updatedCartRemove;
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2);
      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.count, 0);

    },
    clearCart: (state) => {
      localStorage.setItem('items', JSON.stringify([]));
      state.cartItems = [];
    },
    incrementItem: (state, action) => {
      const incIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (incIndex === -1) {
        const item = data.find((item) => item.id === action.payload);
        if (item) {
          const { name, price } = item;
          const newItem = { name, count: 1, price, id: action.payload };
          const updatedCartIncrement = [...state.cartItems, newItem];
          localStorage.setItem('items', JSON.stringify(updatedCartIncrement));
          state.cartItems = updatedCartIncrement;
        }
      } else if (state.cartItems[incIndex].count !== 0) {
        state.cartItems[incIndex] = { ...state.cartItems[incIndex], count: state.cartItems[incIndex].count + 1 };
        localStorage.setItem('items', JSON.stringify(state.cartItems));
      }
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2);
      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.count, 0);

    },
    decrementItem: (state, action) => {
      const decIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (decIndex !== -1) {
        if (state.cartItems[decIndex].count > 1) {
          state.cartItems[decIndex] = { ...state.cartItems[decIndex], count: state.cartItems[decIndex].count - 1 };
          localStorage.setItem('items', JSON.stringify(state.cartItems));
        } else {
          const updatedCartRemove = state.cartItems.filter((item, index) => index !== decIndex);
          localStorage.setItem('items', JSON.stringify(updatedCartRemove));
          state.cartItems = updatedCartRemove;
        }
      }
      state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2);
      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.count, 0);

    },
    numberOfItems: (state) => {
      if (state.cartItems.length > 0) {
        state.totalItems = state.cartItems.reduce((sum, item) => sum + item.count, 0);
      }
    },
    calculateTotal: (state) => {
      if (state.cartItems.length > 0) {
        state.totalPrice = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2);
      } else{
        state.totalItems = 0;
      }
    },
  },
});

export const {
  removeItem,
  clearCart,
  incrementItem,
  decrementItem,
  numberOfItems,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
