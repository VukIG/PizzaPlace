import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const base_url = 'http://localhost:2000/';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url + 'items' }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () =>
        axios.request({
          method: 'get',
          url: 'items',
        }),
    }),
    changeItem: builder.query({
      query: (newItem) =>
        axios.request({
          method: 'put',
          url: 'items', //potencijalni bug jer put nema index
          data: newItem,
        }),
    }),
    addItem: builder.mutation({
      query: (newItem) =>
        axios.request({
          method: 'post',
          url: 'items',
          data: newItem,
        }),
    }),
  }),
});

export const { useGetAllItemsQuery, useChangeItemMutation, useAddItemMutation } = productsApi;
