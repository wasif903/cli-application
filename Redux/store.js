import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './reducers/UserSlice'
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck:false,
            serializableCheck: false,
        }).concat(userSlice.middleware),

})

setupListeners(store.dispatch);