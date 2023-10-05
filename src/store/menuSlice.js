import { createSelector, createSlice } from '@reduxjs/toolkit';
import data from '../mockData';

const initialState = {
  data: data,
  editedProduct: '',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, description, price, toppings, image, id } = action.payload;
      let transformToppings = [];
      transformToppings = toppings.map((item) => {
        return { id: item.value, name: item.label };
      });
      // Convert the Base64 string to a Blob
      const byteCharacters = atob(image.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });

      const imageUrl = URL.createObjectURL(blob);

      let newProduct = {
        name: name,
        description: description,
        price: price,
        toppings: transformToppings,
        imageUrl: imageUrl,
        id: id,
        count: 0,
      };
      state.data = [...state.data, newProduct];
    },
    editItem: (state, action) => {
      console.log(state, action);
      const { name, description, price, toppings, image, id } = action.payload;
      let transformToppings = [];
      transformToppings = toppings.map((item) => {
        return { id: item.value, name: item.label };
      });
      // Convert the Base64 string to a Blob
      const byteCharacters = atob(image.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/png' });

      const imageUrl = URL.createObjectURL(blob);

      let newProduct = {
        name: name,
        description: description,
        price: price,
        toppings: transformToppings,
        imageUrl: imageUrl,
        id: id,
        count: 0,
      };
      const updatedProducts = state.data.filter((item) => item.id !== id);
      state.editedProduct = newProduct;
      state.data = [...updatedProducts, newProduct];
      console.log(state.data);
    },
  },
});
export const { addItem, editItem } = menuSlice.actions;
export const menuData = (state) => state.menu.data;
export const editedProduct = (state) => state.menu.editedProduct;
export const selectMenuItemById = () =>
  createSelector([menuData, (_, id) => id], (menuData, id) => {
    return menuData.find((item) => item.id === parseInt(id));
  });

export default menuSlice.reducer;
