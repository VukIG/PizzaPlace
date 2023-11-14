import axios from "axios";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";

const base_url = 'http://localhost:2000/';

export const toppingsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url + 'toppings' }),
    endpoints: (builder) => ({
      getAllToppings: builder.query({
        query: () =>
          axios.request({
            method: 'get',
            url: 'toppings',
          }),
      }),
    }),
  });
  
  export const { useGetAllToppings } = toppingsApi;
  