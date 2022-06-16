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


export const contactsList = state => [...state.contacts].sort((a,b) => {
  const firstDate = new Date(a.date_subject);
  const secondDate = new Date(b.date_subject);
  return secondDate.getTime() - firstDate.getTime() ;
  /*  El método getTime() devuelve el valor numérico correspondiente 
  a la hora para la fecha especificada según la hora universal.
  En este caso se utiliza con sort para poder ordenar las fechas de más
  recientes a menor
  */
})

export default contactsSlice.reducer;
