import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, modifyItem, deleteItem} from '../services/products.services'
import axios from 'axios';
const initialState = {
  data: fetchData(),
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
      modifyItem(id, newProduct)
      console.log(state.data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const fetchData = createAsyncThunk('menu/fetchData', async () => {
  try {
    const firebaseDatabaseURL = 'https://pizzaplace-a31d7-default-rtdb.europe-west1.firebasedatabase.app/';
    const response = await axios.get(firebaseDatabaseURL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
});


export const { addItem, editItem } = menuSlice.actions;
export const menuData = (state) => state.menu.data;
export const editedProduct = (state) => state.menu.editedProduct;
export const selectMenuItemById = () =>
  createSelector([menuData, (_, id) => id], (menuData, id) => {
    return menuData.find((item) => item.id === parseInt(id));
  });

export default menuSlice.reducer;
