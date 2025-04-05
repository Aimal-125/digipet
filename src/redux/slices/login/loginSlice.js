import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  roles: ["user"],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginState: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { getLoginState } = loginSlice.actions;

export default loginSlice.reducer;
