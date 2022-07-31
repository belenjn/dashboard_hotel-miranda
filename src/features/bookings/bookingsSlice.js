import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../apiFunctions";

const initialState = {
  allBookings: []
};

export const fetchBookings = createAsyncThunk(
  "bookings/getBookings",
  async () => {
    const response = await apiRequest("bookings", "GET");
    return response;
  }
);

export const getBooking = createAsyncThunk(
  "bookings/getBooking",
  async (id) => {
    const response = await apiRequest(`bookings/${id}`, "GET");
    return response;
  }
);

export const deleteContact = createAsyncThunk(
  "bookings/deleteBooking",
  async (id) => {
    const response = await apiRequest(`bookings/${id}`, "DELETE");
    return response;
  }
);

/* TODO: Faltan métodos POST y PUT */

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      return void (state.allBookings = action.payload);
    });
  },
});

export const bookingsList = (state) => state.bookings.allBookings;


export default bookingsSlice.reducer;
