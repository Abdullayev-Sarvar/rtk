import { createApi, retry, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = async (args, api, extraOptions) => {
    const { dispatch } = api;
    const rowBaseQuery = fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`); 
            }
            return headers;
        }
        
    })
    const response = await rowBaseQuery(args, api, extraOptions)
    if (response.error) {
        const { status } = response.error;
        if (status === 401 || status === 403){
            localStorage.removeItem("token")
        }
    }

    return response
}
const baseQueryWidthRetry = retry(baseQuery,{maxRetries:0})

export const api = createApi({
    reducerPath:"api",
    baseQuery: baseQueryWidthRetry,
    tagTypes: ["Products"],
    endpoints:() => ({})

})