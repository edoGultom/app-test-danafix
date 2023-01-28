import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { signSlice } from "./reducer/authSlice";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

const reducers = combineReducers({
  [signSlice.name]: signSlice.reducer,
});
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export default () => {
  let store = createStore(reducers, enhancer);
  return { store };
};
