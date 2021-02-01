import React from "react";
import ContactsList from "./phonebook/ContactsList";
import AddContactForm from "./phonebook/AddContactForm";
import Filter from "./phonebook/Filter";
import styles from "./phonebook/phonebook.module.css";

export default function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Телефонна книга</h1>
        <AddContactForm />
        <Filter />
        <ContactsList />
      </div>

      {/* <div className={styles.container}>
          <h1>Телефонна книга</h1>
          <AddContactForm onAddContact={this.addContact} />
          {this.state.contacts.length > 1 && (
            <Filter
              handleInput={this.handleFilter}
              value={this.state.filterW}
            />
          )}
        </div>

        <div className={styles.container}>
          <h2>Список контактів</h2>
          {filteredContacts.length > 0 && (
            <>
              <ContactsList
                contacts={filteredContacts}
                onDeleteItem={this.deleteItem}
              />
            </>
          )}
        </div> */}
    </>
  );
}
// state = {
//   contacts: [
//     { id: "id-1", name: "Rosie Simpson", tel: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", tel: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", tel: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", tel: "227-91-26" },
//   ],
//   filterW: "",
// };

// addContact = ({ name, tel }) => {
//   if (this.state.contacts.find((contact) => contact.name === name)) {
//     alert("Такий контакт уже існує");
//     return;
//   }
//   this.setState({
//     contacts: [...this.state.contacts, { id: uuidv4(), name, tel }],
//   });
// };

// handleFilter = (e) => {
//   this.setState({ filterW: e.target.value });
// };

// getFilteredContacts = () => {
//   const { contacts, filterW } = this.state;
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filterW.toLowerCase())
//   );
// };

// deleteItem = (e) => {
//   const idDelete = e.target.id;
//   const updatedContacts = this.state.contacts.filter(
//     (contact) => contact.id !== idDelete
//   );
//   this.setState({ contacts: updatedContacts });
// };

// const filteredContacts = this.getFilteredContacts();
