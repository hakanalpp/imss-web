import { LOGIN_SUCCESS } from "./user.types";
import { UserState } from "./user.types";

const initialState: UserState = {
  username: "",
  role: "",
  name: "",
  surname: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...action.payload };
    }
    default:
      return state;
  }
};

export default user;
