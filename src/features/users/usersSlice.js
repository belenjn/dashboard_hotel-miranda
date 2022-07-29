import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../fetchData";

const initialState = {
  allUsers: [],
};

export const fetchUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await fetchData("users", "GET");
  return response;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const response = await fetchData(`users/${id}`, "GET");
  return response;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  const response = await fetchData(`users/${id}`, "DELETE");
  return response;
});

/* TODO: Faltan métodos POST y PUT */

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    activeEmployees: (state) => {
      state.filteredsUsers = state.allUsers.filter(
        (user) => user.status === true
      );
    },
    inactiveEmployees: (state) => {
      state.filteredsUsers = state.allUsers.filter(
        (user) => user.status === false
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return void (state.allUsers = action.payload);
    });
  },
});

export const usersList = (state) => state.users.allUsers;

export const { activeEmployees, inactiveEmployees } = usersSlice.actions;

export default usersSlice.reducer;
