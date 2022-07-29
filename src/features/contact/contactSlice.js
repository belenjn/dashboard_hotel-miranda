import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../apiFunctions";

const initialState = {
  allContacts: [],
};

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    const response = await apiRequest("contacts", "GET");
    return response;
  }
);

export const getContact = createAsyncThunk(
  "contacts/getContact",
  async (id) => {
    const response = await apiRequest(`contacts/${id}`, "GET");
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    const response = await apiRequest(`contacts/${id}`, "DELETE");
    return response;
  }
);

/* TODO: Faltan métodos POST y PUT */

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      return void (state.allContacts = action.payload);
    });
  },
});

// export const contactsList = (state) =>
//   [...state.contacts].sort((a, b) => {
//     return (
//       new Date(b.date_subject).getTime() - new Date(a.date_subject).getTime()
//     );
//     /*  El método getTime() devuelve el valor numérico correspondiente
//   a la hora para la fecha especificada según la hora universal.
//   En este caso se utiliza con sort para poder ordenar las fechas de más
//   recientes a menor
//   */
//   });

export const contactsList = (state) => state.contacts.allContacts;

// export const { deleteContacts, getContact, updateContact, newContact } =
//   contactsSlice.actions;

export default contactsSlice.reducer;
