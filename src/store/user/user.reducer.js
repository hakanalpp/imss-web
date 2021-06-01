import { LOGIN_SUCCESS, REMOVE_USER, STATUS_CHANGED } from "./user.types";

const initialState = {
  username: "",
  status: {},
  role: "",
  name: "",
  surname: "",
  token: "",
  id: 0
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...action.payload };
    }
    case REMOVE_USER: {
      return {};
    }
    case STATUS_CHANGED: {
      return { ...state, status: action.payload };
    }
    default:
      return state;
  }
};

export default user;
