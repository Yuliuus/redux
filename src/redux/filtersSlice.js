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



export const selectFilter = (state) => state.filters[name];

export const selectName = (state) => state.filters.name;

export const selectUsername = (state) => state.filters.username;

export const selectEmail = (state) => state.filters.email;

export const selectPhone = (state) => state.filters.phone;




export const { changeTextFilter } = slice.actions;


export default slice.reducer;