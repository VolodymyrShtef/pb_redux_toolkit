import { combineReducers } from "redux";
import actionsTypes from "./phbActions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [actionsTypes.addContact]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [actionsTypes.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [actionsTypes.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });

// {
//   contacts:
// {item:[],
// filterW: "",}
// };
