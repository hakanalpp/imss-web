import { LOGIN_SUCCESS, REMOVE_USER } from "./user.types";

export const loginSuccess = (username, role, name, surname, token) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    role,
    name,
    surname,
    token
  }
});

export const removeUser = () => ({
  type: REMOVE_USER
});
