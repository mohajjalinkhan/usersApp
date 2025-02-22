import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      // state.push(action.payload);
    },
    updateUser: (state, action) => {
      state.users[action.payload.index] = action.payload.data;
    },
    deleteUser: (state, action) => {
      state.users.splice(action.payload, 1);
    },
  },
});

export const { addUser, deleteUser, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
