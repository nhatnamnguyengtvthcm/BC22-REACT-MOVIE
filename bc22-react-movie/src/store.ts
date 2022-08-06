import { configureStore } from "@reduxjs/toolkit";
import counter from "slices/counter";
import movies from "slices/movies";
import banner from "slices/banner";
import auth from "./slices/auth";
import cinema from "./slices/cinema"
// configureStore: đã bao gồm redux-devtool và redux thunk
const store = configureStore({
    reducer: {
        // counter,
        movies,
        auth,
        banner,
        cinema,
    },
    
    // devTools: enable devtool hay không(defaul: true)
    // devTools: false
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

