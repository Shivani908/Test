import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchs: [],
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addwatch: (state, action) => {
            state.watchs = action.payload;
        },
    },
});

export const { addwatch } = counterSlice.actions;

export default counterSlice.reducer;