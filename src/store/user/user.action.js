import { LOGIN_SUCCESS } from "./user.types";

export const loginSuccess = (username, role, name, surname) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    role,
    name,
    surname
  }
});
