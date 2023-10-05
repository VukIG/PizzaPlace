import { createSelector, createSlice } from '@reduxjs/toolkit';
import data from '../mockData';

const initialState = {
  data: data,
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
      const blob = new Blob([byteArray], { type: 'image/png' }); // Replace with the appropriate MIME type

      // Create a URL from the Blob
      const imageUrl = URL.createObjectURL(blob);
      // Now, `imageUrl` contains the URL representing the Base64 data
      // You can use `imageUrl` to display the image or do other operations
      // Don't forget to release the URL when it's no longer needed
      // URL.revokeObjectURL(imageUrl);
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
  },
});
export const { addItem } = menuSlice.actions;
export const menuData = (state) => state.menu.data;

export const selectMenuItemById = () =>
  createSelector([menuData, (_, id) => id], (menuData, id) => {
    return menuData.find((item) => item.id === parseInt(id));
  });

export default menuSlice.reducer;
