import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    id: "",
    image: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = [state.user, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
