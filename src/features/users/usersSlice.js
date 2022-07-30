import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../apiFunctions";

const initialState = {
  allUsers: []
};

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await apiRequest("users", "GET");
  return response;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const response = await apiRequest(`users/${id}`);
  return response;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await apiRequest(`users/${id}`, "DELETE");
  return response;
});

/* TODO: Faltan métodos POST y PUT */

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return void (state.allUsers = action.payload);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        return void (state.singleUser = action.payload);
      });
  },
});


export const usersList = (state) => state.users.allUsers;

export default usersSlice.reducer;
