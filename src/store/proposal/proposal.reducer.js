import { PROPOSAL_SUCCESS } from "./proposal.types";

const initialState = {
  version: 0
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case PROPOSAL_SUCCESS: {
      return { ...state, payload: state.version + 1 };
    }
    default:
      return state;
  }
};

export default user;
