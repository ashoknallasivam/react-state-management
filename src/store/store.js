// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../reducers/index";
// Add the import
import mySaga from "../sagas/sagas.js";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Added line
sagaMiddleware.run(mySaga);

export default store;
