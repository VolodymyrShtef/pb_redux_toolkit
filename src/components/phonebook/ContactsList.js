import React from "react";
import styles from "./phonebook.module.css";
import { connect } from "react-redux";
import phbActions from "../../redux/phonebook/phbActions";

function ContactsList({ contacts, onDeleteItem }) {
  // в мене весь список рендериться тут. якщо ж елементи списку зробити окремим компонентом,
  // то йому треба прокидати лише ID, і кожний елемент колекції підписувати на редакс стейт окремо.
  // це така оптимізація. приклад у Репети лекція 12 в кінці
  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div className={styles.listItem_container}>
              {contact.name + " " + contact.tel}
              <button
                id={contact.id}
                className={styles.deleteButton}
                type="button"
                onClick={() => onDeleteItem(contact.id)}
              >
                Видалити
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
const mapStateToProps = (state) => {
  const filteredContacts = state.contacts.items.filter((item) =>
    item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
  return { contacts: filteredContacts };
};

// const mapStateToProps = (state) => ({ contacts: state.contacts.items });

const mDTP = {
  onDeleteItem: phbActions.deleteContact,
};
export default connect(mapStateToProps, mDTP)(ContactsList);
