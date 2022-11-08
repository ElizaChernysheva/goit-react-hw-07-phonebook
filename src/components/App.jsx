import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid'
import { useCallback, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getContacts} from '../redux/contacts/contactSelector';
import {setFilterAction} from '../redux/filter/filterSlice';
import {addContact,deleteContact,fetchContacts } from '../redux/contacts/concactsOperations';

const App = () => {
  const dispatch = useDispatch();
  const { items,isLoading,error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleOnSubmit = ({ name,number }) => {

    if(items.some(el => el.name === name)){
      alert(`${name} is already in contacts`)
      return
    }

    const contact ={
      id: nanoid(),
      name,
      number,
    }

    dispatch(addContact(contact))
  }

  const handleOnFilterChange =({ target }) =>{
    const valueToLowerCase = target.value.toLowerCase().trim();
    dispatch(setFilterAction(valueToLowerCase))
  }

  const removeContact = (id) =>{
      dispatch(deleteContact(id))
  }


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={handleOnSubmit}/>
        <h2>Contacts</h2>
        <Filter onFilterChange={handleOnFilterChange}/>
        {isLoading && <p className='loading'>...Loading</p>}
        {error && <p className='error'>Error : Something went wrong!</p>}
        <ContactList removeItem={removeContact}/>
      </div>
    );
};


export default App;
