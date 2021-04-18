import { LOGIN_SUCCESS, REMOVE_USER } from "./user.types";

export const loginSuccess = (username, role, name, surname) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    role,
    name,
    surname
  }
});

export const removeUser = () => ({
  type: REMOVE_USER
});
