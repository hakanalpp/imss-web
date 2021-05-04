import { LOGIN_SUCCESS, REMOVE_USER } from "./user.types";

export const loginSuccess = (username, role, name, surname, token, id) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    role,
    name,
    surname,
    token,
    id
  }
});

export const removeUser = () => ({
  type: REMOVE_USER
});
