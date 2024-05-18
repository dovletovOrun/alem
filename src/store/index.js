import { configureStore } from "@reduxjs/toolkit";
import { getAllUgurlarApi } from "../Services/GetUgurlar";
import { getAllSlidersApi } from "../Services/GetSliders";
import { getAllToparlarApi } from "../Services/GetToparlar";
import { getAllGoodsApi } from "../Services/GetGoods";
import { getAllBrandsApi } from "../Services/GetBrands";

const store = configureStore({
  reducer: {
    [getAllUgurlarApi.reducerPath]: getAllUgurlarApi.reducer,
    [getAllSlidersApi.reducerPath]: getAllSlidersApi.reducer,
    [getAllToparlarApi.reducerPath]: getAllToparlarApi.reducer,
    [getAllGoodsApi.reducerPath]: getAllGoodsApi.reducer,
    [getAllBrandsApi.reducerPath]: getAllBrandsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        getAllUgurlarApi.middleware,
        getAllSlidersApi.middleware,
        getAllToparlarApi.middleware,
        getAllGoodsApi.middleware,
        getAllBrandsApi.middleware,
    ),
});

export default store;
