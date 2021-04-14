import { LOGIN_SUCCESS, LoginSuccessAction } from "./user.types";

export const loginSuccess = (
  username: string,
  role: string,
  name: string,
  surname: string
): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    role,
    name,
    surname,
  },
});
