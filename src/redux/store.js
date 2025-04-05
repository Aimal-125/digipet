import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./slices/login/loginSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
  },
});
