import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getAllBrandsApi = createApi({
    reducerPath: "getAllBrandsApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://216.250.12.124:8000/api/v1`}),
    tagTypes: ["Brands"],
    endpoints: (build) => ({
        getAllBrandsData: build.query({
            query: () => ({
                url: "/brands",
            }),
            providesTags: () => ["Brands"]
        }),
        
    })
})