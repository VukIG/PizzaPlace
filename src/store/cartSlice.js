import { createSlice, createSelector } from '@reduxjs/toolkit';
import data from '../mockData';

const initialState = {
  items: JSON.parse(localStorage.getItem('items')) || [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const updatedCartRemove = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('items', JSON.stringify(updatedCartRemove));
      state.items = updatedCartRemove;
    },
    clearCart: (state) => {
      localStorage.setItem('items', JSON.stringify([]));
      state.items = [];
    },
    incrementItem: (state, action) => {
      const incIndex = state.items.findIndex((item) => item.id === action.payload);
      if (incIndex === -1) {
        const item = data.find((item) => item.id === action.payload);
        if (item) {
          const { name, price } = item;
          const newItem = { name, count: 1, price, id: action.payload };
          const updatedCartIncrement = [...state.items, newItem];
          localStorage.setItem('items', JSON.stringify(updatedCartIncrement));
          state.items = updatedCartIncrement;
        }
      } else if (state.items[incIndex].count !== 0) {
        state.items[incIndex] = { ...state.items[incIndex], count: state.items[incIndex].count + 1 };
        localStorage.setItem('items', JSON.stringify(state.items));
      }
    },
    decrementItem: (state, action) => {
      const decIndex = state.items.findIndex((item) => item.id === action.payload);
      if (decIndex !== -1) {
        if (state.items[decIndex].count > 1) {
          state.items[decIndex] = { ...state.items[decIndex], count: state.items[decIndex].count - 1 };
          localStorage.setItem('items', JSON.stringify(state.items));
        } else {
          const updatedCartRemove = state.items.filter((item, index) => index !== decIndex);
          localStorage.setItem('items', JSON.stringify(updatedCartRemove));
          state.items = updatedCartRemove;
        }
      }
    },
  },
});

export const {
  removeItem,
  clearCart,
  incrementItem,
  decrementItem,
} = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotalItems = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.count, 0)
);
export const selectTotalPrice = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.count * item.price, 0).toFixed(2)
);;

export default cartSlice.reducer;
