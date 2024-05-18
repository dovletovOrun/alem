import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getAllToparlarApi = createApi({
    reducerPath: "getAllToparlarApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://216.250.12.124:8000/api/v1`}),
    tagTypes: ["Toparlar"],
    endpoints: (build) => ({
        getAllToparlarData: build.query({
            query: () => ({
                url: "/groupcodes",
            }),
            providesTags: () => ["Toparlar"]
        }),
    })
})