import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../redux/contacts/contactsSlice";
import filtersReducer from "../redux/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
