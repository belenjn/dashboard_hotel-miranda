import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersJSON from "../../database/users.json";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return new Promise((resolve) => setTimeout(resolve(usersJSON), 0));
});

const initialState = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      return state.filter((booking) => booking.id !== action.payload.id);
    },
    getUser: (state, action) => {
      return state.find((booking) => booking.id === action.payload);
    },
    updateUser: (state, action) => {
      return state.map((booking) => {
        if (booking.id === action.payload.id) {
          return action.payload;
        }
        return booking;
      });
    },
    newUser: (state, action) => {
      const user = {
        name_user: action.payload.name_user,
        id_user: action.payload.id,
        email_user: action.payload.email_user,
        phone_user: action.payload.phone_user,
        start_date: action.payload.start_date,
        description: action.payload.description,
        status: action.payload.status,
      };
      state = state.push(user);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const usersList = (state) => state.users;

export const { deleteUser, getUser, updateUser, newUser } = usersSlice.actions;

export default usersSlice.reducer;
