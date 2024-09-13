import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../slices/loginSlice"
import { api } from "../api"

const store = configureStore({
    reducer: {
        login: loginReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)

})
export { store }

