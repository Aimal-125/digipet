import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarCollapse: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarCollapse: (state, action) => {
      state.sidebarCollapse = action.payload;
    },
  },
});

export const { setSidebarCollapse } = sidebarSlice.actions;

export default sidebarSlice.reducer;
