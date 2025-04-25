
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";


const ContactList = ({contacts}) => {
const dispatch = useDispatch();

  
  return (
      <ul className={css.list}>
        {contacts.map(contact => (
           <li key={contact.id} className={css.item}>
          <Contact
            contact={contact}
            removeContact={() => {
              dispatch(deleteContact(contact.id));}
            }
          />
          </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList;