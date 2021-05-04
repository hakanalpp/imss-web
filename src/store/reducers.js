import { combineReducers } from "redux";

import user from "./user";
import proposal from "./proposal";

const rootReducer = combineReducers({
  user,
  proposal
});

export default rootReducer;
