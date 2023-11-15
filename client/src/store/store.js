import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import menuSlice from './menuSlice';
import { productsApi } from '../services/products.services';
import { toppingsApi } from '../services/toppings.services';
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    menu: menuSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [toppingsApi.reducerPath]: toppingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, toppingsApi.middleware),
});
