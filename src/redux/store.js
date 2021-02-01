import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import phbReducer from "./phonebook/phbReducer";

const rootReducer = combineReducers({ contacts: phbReducer });
const store = configureStore({ reducer: rootReducer });

export default store;
