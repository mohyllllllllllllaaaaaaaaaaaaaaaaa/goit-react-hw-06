import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
const contacts = useSelector((state) => state.contacts.items);
const filter = useSelector((state) => state.filter.name);

const visibleContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
  
  return (
      <ul className={css.list}>
        {visibleContacts.map(contact => (
           <li key={contact.id} className={css.item}>
          <Contact contact={contact}/>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList;