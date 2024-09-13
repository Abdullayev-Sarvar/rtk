import { api } from "./index";

const loginApi = api.injectEndpoints({
    endpoints: (build) => ({
        loginInUser: build.mutation({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body : body
            })
        })
    })
})
export const { useLoginInUserMutation } = loginApi