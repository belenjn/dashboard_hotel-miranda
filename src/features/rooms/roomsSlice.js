import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomsJSON from "../../database/rooms.json";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  setTimeout(() => {
    return roomsJSON;
  }, 0);
});

const initialState = {
  rooms: roomsJSON,
  status: "",
};

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      state.status = "success";
      state.rooms = action.payload;
    });
  },
});

/*
export const {

} = roomsSlice.actions;
 */

export default roomsSlice.reducer;
