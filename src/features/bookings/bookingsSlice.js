import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../fetchData";

const initialState = {
  allBookings: [],
};

export const fetchBookings = createAsyncThunk("bookings/getBookings", async () => {
  const response = await fetchData("bookings", "GET");
  return response;
});


export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    deleteBooking: (state, action) => {
      return state.filter((booking) => booking.id !== action.payload.id);
    },
    getBooking: (state, action) => {
      return state.find((booking) => booking.id === action.payload);
    },
    updateBooking: (state, action) => {
      return state.map((booking) => {
        if (booking.id === action.payload.id) {
          return action.payload;
        }
        return booking;
      });
    },
    newBooking: (state, action) => {
      const booking = {
        id: action.payload.id,
        name_guest: action.payload.name_guest,
        order_date: action.payload.order_date,
        sales: action.payload.sales,
        occupancy: action.payload.occupancy,
        special_request: action.payload.special_request,
        room_number: action.payload.room_number,
        rate: action.payload.rate,
        status: action.payload.status,
      };
      state = state.push(booking);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBookings.fulfilled, (state, action) => {
      return void (state.allBookings = action.payload);

    });
  },
});

export const bookingsList = (state) => state.bookings.allBookings;

export const { deleteBooking, getBooking, updateBooking, newBooking } =
  bookingsSlice.actions;

export default bookingsSlice.reducer;
