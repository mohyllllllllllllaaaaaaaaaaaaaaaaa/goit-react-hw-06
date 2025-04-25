
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";


const ContactList = ({contacts}) => {
const dispatch = useDispatch();

  
  return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            removeContact={() => dispatch(deleteContact(contact.id))}
          />
        ))}
      </ul>
    );
  };
  
  export default ContactList;