import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/adding", ({ name, tel }) => ({
  payload: { contact: { id: uuidv4(), name, tel } },
}));
const deleteContact = createAction("contact/delete");
const changeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, changeFilter };
