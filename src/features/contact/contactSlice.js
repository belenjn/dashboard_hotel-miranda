import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../fetchData";

const initialState = {
  allContacts: [],
};

export const fetchContacts = createAsyncThunk("contacts/getContacts", async () => {
  const response = await fetchData("contacts", "GET");
  return response;
});

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContacts: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload.id);
    },
    getContact: (state, action) => {
      return state.find((contact) => contact.id === action.payload);
    },
    updateContact: (state, action) => {
      return state.map((booking) => {
        if (booking.id === action.payload.id) {
          return action.payload;
        }
        return booking;
      });
    },
    newContact: (state, action) => {
      const contact = {
        id: action.payload.id,
        name_guest: action.payload.name_guest,
        email_guest: action.payload.email_guest,
        phone_guest: action.payload.phone_guest,
        date_subject: action.payload.date_subject,
        subject: action.payload.subject,
        comment: action.payload.comment,
      };
      state = state.push(contact);
    },
  },
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

export const { deleteContacts, getContact, updateContact, newContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
