import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersJSON from "../../database/users.json";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    setTimeout(() => {
        return usersJSON
    }, 0);
})

const initialState = {
    users: usersJSON,
    status: ""

}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }, extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = "success";
            state.users = action.payload;
          })
    }
})

/*
export const {

} = roomsSlice.actions;
 */

export default usersSlice.reducer;