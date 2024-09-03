import { createSelector } from "@reduxjs/toolkit";
import { selectUser } from "../contacts/contactsSelectors";

export const selectFilter = (state) => state.filters[name];

export const selectName = (state) => state.filters.name;

export const selectUsername = (state) => state.filters.username;

export const selectEmail = (state) => state.filters.email;

export const selectPhone = (state) => state.filters.phone;

export const selectVisibleUsers = createSelector(
    [selectUser, selectName, selectUsername, selectEmail, selectPhone],
    (users, filterName, filterUsername, filterEmail, filterPhone) => {
        console.log("filter");

        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(filterName.toLowerCase()) &&
                user.username.toLowerCase().includes(filterUsername.toLowerCase()) &&
                user.email.toLowerCase().includes(filterEmail.toLowerCase()) &&
                user.phone.toLowerCase().includes(filterPhone.toLowerCase())
        );
    })

