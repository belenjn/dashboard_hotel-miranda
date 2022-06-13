import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookingsJSON from "../../database/bookings.json";

export const fetchBookings = createAsyncThunk("bookings/fetchBookings", async () => {
    setTimeout(() => {
        return bookingsJSON
    }, 0);
})

const initialState = {
    bookings: bookingsJSON,
    status: ""

}

export const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder
        .addCase(fetchBookings.fulfilled, (state, action) => {
            state.status = "success";
            state.bookings = action.payload;
          })
    }
})

/*
export const {

} = bookingsSlice.actions;
 */

export default bookingsSlice.reducer;