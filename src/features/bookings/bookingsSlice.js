import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../fetchData";

const initialState = {
  allBookings: [],
};

export const fetchBookings = createAsyncThunk(
  "bookings/getBookings",
  async () => {
    const response = await fetchData("bookings", "GET");
    return response;
  }
);

export const getBooking = createAsyncThunk(
  "bookings/getBooking",
  async (id) => {
    const response = await fetchData(`bookings/${id}`, "GET");
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "bookings/deleteBooking",
  async (id) => {
    const response = await fetchData(`bookings/${id}`, "DELETE");
    return response;
  }
);

/* TODO: Faltan métodos POST y PUT */

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      return void (state.allBookings = action.payload);
    });
  },
});

export const bookingsList = (state) => state.bookings.allBookings;

// export const { deleteBooking, getBooking, updateBooking, newBooking } =
//   bookingsSlice.actions;

export default bookingsSlice.reducer;
