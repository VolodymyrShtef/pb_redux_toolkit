import React, { Component } from "react";
import styles from "./phonebook.module.css";
import { connect } from "react-redux";
import phbActions from "../../redux/phonebook/phbActions";

class AddContactForm extends Component {
  state = {
    name: "",
    tel: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name) {
      if (this.props.contacts.find((item) => item.name === this.state.name)) {
        alert("Такий контакт уже існує");
        this.setState({ name: "", tel: "" });
        return;
      }
      this.props.onAddContact(this.state);
      this.setState({ name: "", tel: "" });
    }
  };

  render() {
    return (
      <>
        {" "}
        <form onSubmit={this.handleSubmit}>
          <label>
            Ім'я{" "}
            <input
              className={styles.input_field}
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>

          <label>
            Номер телефону{" "}
            <input
              className={styles.input_field}
              type="tel"
              value={this.state.tel}
              onChange={this.handleChange}
              name="tel"
              // pattern="[0-9]{5}"
            />
          </label>
          <br />
          <button className={styles.addButton} type="submit">
            Додати в контакти
          </button>

          <br />
        </form>
      </>
    );
  }
}

// після цієї операції на пропсах компонента будуть потрібні нам куски стейта
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});
// а ця операція прокидує методи у пропси компонента
const mDTP = { onAddContact: phbActions.addContact };

export default connect(mapStateToProps, mDTP)(AddContactForm);
