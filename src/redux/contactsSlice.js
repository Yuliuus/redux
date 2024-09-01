import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./contactsOps";

const slice = createSlice({
    name: "users",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false,
                    state.error = true
            })
    }
});

export default slice.reducer;