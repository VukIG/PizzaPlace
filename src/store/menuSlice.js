import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, modifyItem, addItemToBase } from '../services/products.services';
import { toppingsOptions } from '../mockData';
import axios from 'axios';
const initialState = {
  data: [],
};

function findToppingsById(idList) {
  const selectedToppings = toppingsOptions.filter((topping) => idList.includes(topping.id));
  return selectedToppings;
}

function transformImage(image) {
  const byteCharacters = atob(image.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' });

  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
}

function transformAttributes(toppings) {
  let newArray = [];
  newArray = toppings.map((topping) => {
    return { id: topping.value, name: topping.label };
  });
  return newArray;
}

const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, description, price, toppings, image, id } = action.payload;

      let transformToppings = [];
      typeof toppings[0] == 'number'
        ? (transformToppings = findToppingsById(toppings))
        : (transformToppings = toppings);

      // Convert the Base64 string to a Blob
      let imageUrl;
      isValidUrl(image) ? (imageUrl = image) : (imageUrl = transformImage(image));

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
      addItemToBase(id, newProduct);
    },
    editItem: (state, action) => {
      const { name, description, price, toppings, image, id } = action.payload;
      let transformToppings = [];
      typeof toppings[0] == 'number'
        ? (transformToppings = findToppingsById(toppings))
        : (transformToppings = transformAttributes(toppings));
      // Convert the Base64 string to a Blob
      let imageUrl;
      isValidUrl(image) ? (imageUrl = image) : (imageUrl = transformImage(image));
      const updatedData = state.data.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            name: name,
            description: description,
            price: price,
            toppings: transformToppings,
            imageUrl: imageUrl,
            id: id,
          };
        }
        return item;
      });
      state.data = updatedData;
      modifyItem(id, {
        name: name,
        description: description,
        price: price,
        toppings: transformToppings,
        imageUrl: imageUrl,
        id: id,
      });
    },
  },
  extraReducers:{

  }
});

export const asyncFunctions = createAsyncThunk()

export const { addItem, editItem } = menuSlice.actions;
export const menuData = (state) => state.menu.data;
export const selectMenuItemById = () =>
  createSelector([menuData, (_, id) => id], (menuData, id) => {
    return menuData.find((item) => item.id === parseInt(id));
});

export default menuSlice.reducer;