import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactsJSON from "../../database/contacts.json";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
    setTimeout(() => {
        return contactsJSON
    }, 0);
})

const initialState = {
    contacts: contactsJSON,
    status: ""
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.status = "success";
            state.contacts = action.payload;
          })
    }
})

/*
export const {

} = contactsSlice.actions;
 */

export default contactsSlice.reducer;