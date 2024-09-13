import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem("token") || null
}

const cartSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.token = action.payload
            localStorage.setItem("token", state.token);
        },
        singOut: (state) => {
            state.token = null
            localStorage.removeItem("token")
        },

    }
})

export const { signIn, singOut } = cartSlice.actions
export default cartSlice.reducer
