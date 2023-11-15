import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const base_url = 'http://localhost:2000/';

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

export const toppingsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllToppings: builder.query({
      query: () =>
        axios.request({
          method: 'get',
          url: 'toppings', // use 'toppings' instead of 'base_url'
        }),
    }),
  }),
});

export const { useGetAllToppingsQuery } = toppingsApi;  