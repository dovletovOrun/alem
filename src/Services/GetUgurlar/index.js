import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getAllUgurlarApi = createApi({
    reducerPath: "getAllUgurlarApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://216.250.12.124:8000/api/v1`}),
    tagTypes: ["Ugurlar"],
    endpoints: (build) => ({
        getAllUgurlarData: build.query({
            query: () => ({
                url: "/ugurs",
            }),
            providesTags: () => ["Ugurlar"]
        }),
        getAllUgurlarSingleData: build.query({
            query: (id) => ({
                url: `/ugur/${id}`,
            }),
            providesTags: () => ["Ugurlar"]
        }),

       
    })
})