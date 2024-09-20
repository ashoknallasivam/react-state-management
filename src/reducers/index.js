// src/reducers/index.js
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_POSTS_SUCCESS,
  GENERAL_FAILURE,
} from "../actions/actions";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const myReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_USERS_SUCCESS, (state, action) => {
      state.users = action.users;
    })
    .addCase(GET_USERS_FAILURE, (state, action) => {
      state.error = action.error;
    })
    .addDefaultCase(() => {});
});

const myFirstReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_POSTS_SUCCESS, (state, action) => {
      state.posts = action.posts;
    })
    .addCase(GENERAL_FAILURE, (state, action) => {
      state.error = action.error;
    })
    .addDefaultCase(() => {});
});

// Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  myReducer,
  myFirstReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
