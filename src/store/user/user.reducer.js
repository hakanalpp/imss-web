import { LOGIN_SUCCESS, REMOVE_USER } from "./user.types";

const initialState = {
  username: "",
  role: "",
  name: "",
  surname: "",
  token: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...action.payload };
    }
    case REMOVE_USER: {
      return {};
    }
    default:
      return state;
  }
};

export default user;
