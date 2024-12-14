import { configureStore } from "@reduxjs/toolkit";
import watchSlice from "./reducers/watchSlice";

export const store = configureStore({
    reducer: {
        watchReducer: watchSlice,
    },
});