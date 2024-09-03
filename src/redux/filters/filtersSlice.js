import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filters",
    initialState: {
        name: "",
        username: "",
        email: "",
        phone: ""
    },
    reducers: {
        changeTextFilter(state, action) {
            const { field, value } = action.payload;
            state[field] = value;
        },
    },
});
export const { changeTextFilter } = slice.actions;

export default slice.reducer;