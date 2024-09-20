import { createAction } from "@reduxjs/toolkit";
export const GET_USERS_FETCH = createAction("GET_USERS_FETCH");
export const GET_USERS_SUCCESS = createAction("GET_USERS_SUCCESS");
export const GET_USERS_FAILURE = createAction("GET_USERS_FAILURE");

export const GET_POSTS_FETCH = createAction("GET_POSTS_FETCH");
export const GET_POSTS_SUCCESS = createAction("GET_POSTS_SUCCESS");
export const GENERAL_FAILURE = createAction("GENERAL_FAILURE");
export const EXIT_APP = createAction("EXIT_APP");
