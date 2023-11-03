import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const firebase_url = 'https://pizzaplace-a31d7-default-rtdb.europe-west1.firebasedatabase.app/api/pizzas';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () =>
        axios.request({
          method: 'get',
          url: firebase_url,
        }),
    }),
    changeItem: builder.query({
      query: (newItem) =>
        axios.request({
          method: 'put',
          url: firebase_url, //potencijalni bug jer put nema index
          data: newItem,
        }),
    }),
    addItem: builder.mutation({
      query: (newItem) =>
        axios.request({
          method: 'post',
          url: firebase_url,
          data: newItem,
        }),
    }),
  }),
});

export const { useGetAllItemsQuery, useChangeItemMutation, useAddItemMutation } = productsApi;
