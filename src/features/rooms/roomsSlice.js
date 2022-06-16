import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomsJSON from "../../database/rooms.json"


export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
 return new Promise(resolve => setTimeout(resolve(roomsJSON), 0))
});

const initialState = [];


export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    deleteRoom: (state, action) => {
      return state.filter((room) => room.id !== action.payload.id);
    },
    getRoom: (state, action) => {
      return state.find((room) => room.id === action.payload);
    },
    updateRoom: (state, action) => {
      return state.map((booking) => {
        if (booking.id === action.payload.id) {
          return action.payload;
        }
        return booking;
      });
    },
    newRoom: (state, action) => {
      const room = {
        id: action.payload.id,
        room_name: action.payload.room_name,
        room_number: action.payload.room_number,
        floor_room: action.payload.floor_room,
        bed_type: action.payload.bed_type,
        facilities: action.payload.facilities,
        description: action.payload.description,
        date_room: action.payload.date_room,
        rate: action.payload.rate,
        status: action.payload.status,
      };
      state = state.push(room);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRooms.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});


export const roomsList = (state) =>
  [...state.rooms].sort((a, b) => {
    return (
      (a.room_number) - (b.room_number)
    );
  
  });

  export const { deleteRoom, getRoom, updateRoom, newRoom } =
  roomsSlice.actions;

export default roomsSlice.reducer;
