import { api } from "./index";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: () => ({
                url: "/products",
            }),
            providesTags: ["Products"]
        }),
         
        updateProduct: build.mutation({
            query: ({id, title,description}) => ({
                url: `/products/${id}`, 
                method: "PUT",
                body: { 
                    title,
                    description
                }
            }),
            invalidatesTags: ["Products"]
        })
    })
})
export const { useGetProductQuery, useUpdateProductMutation } = productApi