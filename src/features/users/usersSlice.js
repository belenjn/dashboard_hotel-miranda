import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersJSON from "../../database/users.json";

const initialState = usersJSON;

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
 return new Promise(resolve => setTimeout(resolve(initialState), 0))
});



export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export const usersList = state => state.users;

export default usersSlice.reducer;
