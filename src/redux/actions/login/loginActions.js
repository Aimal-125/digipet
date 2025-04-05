import { getLoginState } from "../../slices/login/loginSlice";

export const login =
  (login = true) =>
  async (dispatch) => {
    dispatch(getLoginState(login));
  };
