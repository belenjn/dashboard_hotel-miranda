import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest, apiRequestBody } from "../../apiFunctions";

const initialState = {
  allRooms: [],
  singleRoom: []
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


export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async (id, data) => {
    const response = await apiRequestBody(`rooms/${id}`, "PUT", data);
    return response;
  }
);

export const createRoom = createAsyncThunk(
  "rooms/createRooms",
  async (data) => {
    const response = await apiRequestBody("rooms", "POST", data);
    return response;
  }
);


export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      return void (state.allRooms = action.payload);
    })
    .addCase(getRoom.fulfilled, (state, action) => {
      return void (state.singleRoom = action.payload);
    });
  },
});


export const roomsList = (state) => state.rooms.allRooms;

export default roomsSlice.reducer;
