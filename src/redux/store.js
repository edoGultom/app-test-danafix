import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { signSlice } from "./reducer/authSlice";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const reducers = combineReducers({
  [signSlice.name]: signSlice.reducer,
});

export default () => {
  let store = createStore(reducers, applyMiddleware(thunk));
  return { store };
};
