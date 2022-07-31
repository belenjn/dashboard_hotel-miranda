import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest, apiRequestBody } from "../../apiFunctions";

const initialState = {
  allBookings: [],
  singleBooking: []
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

export const updateBooking = createAsyncThunk(
  "bookings/updateBooking",
  async (id, data) => {
    const response = await apiRequestBody(`bookings/${id}`, "PUT", data);
    return response;
  }
);

export const createBooking = createAsyncThunk(
  "bookings/createBookings",
  async (data) => {
    const response = await apiRequestBody("bookings", "POST", data);
    return response;
  }
);


export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      return void (state.allBookings = action.payload);
    })
    .addCase(getBooking.fulfilled, (state, action) => {
      return void (state.singleBooking = action.payload);
    });
  },
});

export const bookingsList = (state) => state.bookings.allBookings;


export default bookingsSlice.reducer;
