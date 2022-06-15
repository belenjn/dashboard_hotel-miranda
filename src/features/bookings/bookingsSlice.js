import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingsJSON from "../../database/bookings.json";


const initialState = bookingsJSON;

export const fetchBookings = createAsyncThunk("bookings/fetchBookings", async () => {
  return new Promise(resolve => setTimeout(resolve(initialState), 0))
 });
 

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export const bookingsList = state => state.bookings;


export default bookingsSlice.reducer;
