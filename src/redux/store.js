import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./slices/login/loginSlice";
import sidebarSlice from "./slices/sidebar/sidebarSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
    sidebar: sidebarSlice,
  },
});
