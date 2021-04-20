import { createStore } from "redux";
import api from "../api";
import rootReducer from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    const state = JSON.parse(serializedState);
    api.setToken(state.user.token);
    return state;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

const persistedStore = loadState();

const store = createStore(rootReducer, persistedStore);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
