import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getAllSlidersApi = createApi({
    reducerPath: "getAllSlidersApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://216.250.12.124:8000/api/v1`}),
    tagTypes: ["Sliders"],
    endpoints: (build) => ({
        getAllSlidersData: build.query({
            query: () => ({
                url: "/upperBigSliders",
            }),
            providesTags: () => ["Sliders"]
        }),
        getAllSlidersMiddleData: build.query({
            query: () => ({
                url: "/centerBigSliders",
            }),
            providesTags: () => ["Sliders"]
        }),
        getAllSlidersBottomData: build.query({
            query: () => ({
                url: "/bottomBigSliders",
            }),
            providesTags: () => ["Sliders"]
        }),
       

       
    })
})