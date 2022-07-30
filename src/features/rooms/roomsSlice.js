import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../apiFunctions";

const initialState = {
  allRooms: []
};

export const fetchRooms = createAsyncThunk("rooms/getRooms", async () => {
  const response = await apiRequest("rooms", "GET");
  return response;
});

export const getRoom = createAsyncThunk("rooms/getRoom", async (id) => {
  const response = await apiRequest(`rooms/${id}`, "GET");
  return response;
});

export const deleteRoom = createAsyncThunk("rooms/deleteRoom", async (id) => {
  const response = await apiRequest(`rooms/${id}`, "DELETE");
  return response;
});

/* TODO: Faltan métodos POST y PUT */

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      return void (state.allRooms = action.payload);
    });
  },
});


export const roomsList = (state) => state.rooms.allRooms;

export default roomsSlice.reducer;
