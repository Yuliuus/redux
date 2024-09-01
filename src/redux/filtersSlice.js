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
            const { field, value } = action.payload; // Destructure field and value
            state[field] = value; // Dynamically update the correct filter
        },
    },
});

// export const selectFilter = state => {
//     return state.filters;
// }

export const { changeTextFilter } = slice.actions;


export default slice.reducer;