import axios from 'axios';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const base_url = 'http://localhost:2000/';

// Define a custom base query function using axios
const baseQuery = fetchBaseQuery({
  baseUrl: base_url,
  fetchFn: (url, { method, body, headers }) =>
    axios({
      method,
      url,
      data: body,
      headers,
    }),
});

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery, // Use the custom base query
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => 'items', // Relative URL since the base URL is already set
    }),
    changeItem: builder.query({
      query: (newItem) => ({
        url: 'items',
        method: 'put',
        body: newItem,
      }),
    }),
    addItem: builder.mutation({
      query: (newItem) => ({
        url: 'items',
        method: 'post',
        body: newItem,
      }),
    }),
  }),
});

export const { useGetAllItemsQuery, useChangeItemMutation, useAddItemMutation } = productsApi;
