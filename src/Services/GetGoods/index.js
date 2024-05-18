import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAllGoodsApi = createApi({
  reducerPath: "getAllGoodsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://216.250.12.124:8000/api/v1` }),
  tagTypes: ["Goods"],
  endpoints: (build) => ({
    getAllGoodsMostSeenData: build.query({
      query: () => ({
        url: "/ugur/MostViewedProductsForUgur/1",
      }),
      providesTags: () => ["Goods"],
    }),
    getAllProductsData: build.query({
      query: ({
        page,
        query,
        from_price,
        to_price,
        brands,
        gender,
        colors,
        sizes,
      }) => ({
        url: `/search?query=${query}&sizes=${sizes}&brands=${brands}&gender=${gender}&colors=${colors}&to_price=${to_price}&from_price=${from_price}&page=${page}`,
      }),
    }),
    getSingleProductData: build.query({
      query: (id) => ({
        url: `/product/${id}`
      })
    })
  }),
});
