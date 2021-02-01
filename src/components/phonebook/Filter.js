import React from "react";
import styles from "./phonebook.module.css";
import { connect } from "react-redux";
import phbActions from "../../redux/phonebook/phbActions";

const Filter = ({ handleInput, value }) => (
  <label>
    Фільтрувати по імені{" "}
    <input
      className={styles.input_field}
      type="text"
      value={value}
      onChange={(e) => handleInput(e.target.value)}
    />
  </label>
);

// ось тут забираються значення із глобального стейта
const mapStateToProps = (state) => {
  return {
    value: state.contacts.filter,
  };
};
const mDTP = { handleInput: phbActions.changeFilter };

export default connect(mapStateToProps, mDTP)(Filter);
