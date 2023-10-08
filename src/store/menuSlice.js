import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData, modifyItem, addItemToBase } from '../services/products.services';

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
    addItem: (state, action) => {
      const { name, description, price, toppings, image, id } = action.payload;
      // Convert the Base64 string to a Blob
      let newProduct = {
        name: name,
        description: description,
        price: price,
        toppings: toppings,
        imageUrl: image,
        id: id,
        count: 0,
      };
      state.pizzas = [...state.pizzas, newProduct];
    },
    editItem: (state, action) => {
      const { name, description, price, toppings, image, id } = action.payload;
      // Convert the Base64 string to a Blob
      const updatedData = state.pizzas.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            name: name,
            description: description,
            price: price,
            toppings: toppings,
            imageUrl: image,
            id: id,
          };
        }
        return item;
      });
      state.pizzas = updatedData;
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
// ne treba da fetchuje ovoliko puta treba da modifikuje proizvode u stejtu sa reduxom
// ili da sve vreme sa servera salje i prima podatke, sto ce znatno usporiti aplikaciju
export const asyncFetch = createAsyncThunk('menu/fetchData', async (state) => {
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
export const selectMenuItemById = createSelector([menuData, (_, id) => id], (menuData, id) => {
  return menuData.find((item) => item.id === parseInt(id));
});

export default menuSlice.reducer;
