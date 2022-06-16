import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
 return new Promise(resolve => setTimeout(resolve(initialState), 0))
});


export const roomsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export const roomList = state => state.rooms;

export default roomsSlice.reducer;
