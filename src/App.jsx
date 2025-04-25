import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from './redux/filtersSlice';
import './App.css'
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';


function App() {
const dispatch = useDispatch();
const contacts = useSelector((state) => state.contacts.items);
const filter = useSelector((state) => state.filter.name)


  const handelSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onSearch={handelSearch} value={filter} />
      <ContactList  contacts={filterContacts}  />
    </div>
  );
}

export default App;
