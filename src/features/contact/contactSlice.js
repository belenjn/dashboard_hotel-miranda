import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactsJSON from "../../database/contacts.json";

const initialState = contactsJSON;

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    return new Promise((resolve) => setTimeout(resolve(initialState), 0));
  }
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const contactsList = (state) => state.contacts;

export default contactsSlice.reducer;
