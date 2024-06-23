// src/Redux/store.js
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/authreducer";
import postReducer from "./Post/postReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  post:postReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
