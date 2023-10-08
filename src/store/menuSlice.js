import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, modifyItem, addItemToBase } from '../services/products.services';

const initialState = {
  pizzas: [],
  toppings: [],
  status: '',
  error: null,
};

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
      // Convert the Base64 string to a Blob
      let imageUrl;
      isValidUrl(image) ? (imageUrl = image) : (imageUrl = transformImage(image));

      let newProduct = {
        name: name,
        description: description,
        price: price,
        toppings: toppings,
        imageUrl: imageUrl,
        id: id,
        count: 0,
      };
      state.pizzas = [...state.pizzas, newProduct];
    },
    editItem: (state, action) => {
      const { name, description, price, toppings, image, id } = action.payload;
      // Convert the Base64 string to a Blob
      let imageUrl;
      isValidUrl(image) ? (imageUrl = image) : (imageUrl = transformImage(image));
      const updatedData = state.pizzas.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            name: name,
            description: description,
            price: price,
            toppings: toppings,
            imageUrl: imageUrl,
            id: id,
          };
        }
        return item;
      });
      state.pizzas = updatedData;
      modifyItem(id, {
        name: name,
        description: description,
        price: price,
        toppings: toppings,
        imageUrl: imageUrl,
        id: id,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncFetch.fulfilled, (state, action) => {
        console.log(action.payload);
        state.pizzas = action.payload.pizzas;
        state.toppings = action.payload.toppings;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'rejected';
          state.error = action.error.message;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'pending';
        }
      );
  },
});

export const asyncFetch = createAsyncThunk('menu/fetchData', async () => {
  const response = await fetchData();
  return response;
});

export const asyncModify = createAsyncThunk('menu/modifyItem', async (id, updatedData) => {
  const response = await modifyItem(id, updatedData);
  return response;
});

export const asyncAdd = createAsyncThunk('menu/addItemToBase', async (newItem) => {
  const response = await addItemToBase(newItem);
  return response;
});

export const { addItem, editItem } = menuSlice.actions;
export const menuData = (state) => state.menu.pizzas;
export const menuToppings = (state) => state.menu.toppings;
export const selectMenuItemById = createSelector(
  [menuData, (_, id) => id],
  (menuData, id) => {
    return menuData.find((item) => item.id === parseInt(id));
  }
);


export default menuSlice.reducer;
