import css from './Contact.module.css';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact, removeContact }) => {
    return (
      <li className={css.item}>
        <div className={css.info}>
        <p><BsFillPersonFill className={css.icon}/>
          {contact.name}</p>
        <p><BsFillTelephoneFill className={css.icon}/>
          {contact.number}</p>
        </div>
        <button className={css.delete}
         onClick={removeContact}>Delete</button>
      </li>
    );
  };
  
  export default Contact;