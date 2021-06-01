import { LOGIN_SUCCESS, REMOVE_USER, STATUS_CHANGED } from "./user.types";

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

export const statusChanged = (status) => ({
  type: STATUS_CHANGED,
  payload: status
});

export const removeUser = () => ({
  type: REMOVE_USER
});
