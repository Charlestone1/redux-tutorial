import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../existing";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: userData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
