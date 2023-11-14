import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  toppings: [],
  status: '',
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addAllItems: (state,action) =>{
      state.pizzas = action.payload;
    },
    addAllToppings: (state,action) =>{
      state.toppings = action.payload;
    },
    addItem: (state, action) => {
      state.pizzas = [...state.pizzas, action.payload];
    },
    editItem: (state, action) => {
      const updatedPorduct = action.payload;
      const productIndex = state.pizzas.findIndex((product) => product.id == updatedPorduct.id);
      state.pizzas[productIndex] = { ...state.pizzas[productIndex], ...updatedPorduct };
    },
  },
});

export const { addItem, editItem, addAllItems } = menuSlice.actions;
export const menuData = (state) => state.menu.pizzas;
export const menuToppings = (state) => state.menu.toppings;
export const selectMenuItemById = createSelector([menuData, (_, id) => id], (menuData, id) => {
  return menuData.find((item) => item.id === parseInt(id));
});

export default menuSlice.reducer;
