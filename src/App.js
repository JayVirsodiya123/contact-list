
import './App.scss';
import Contact from './components/contact/Contact';
import Sidebar from './components/navbar/Sidebar';
import TopNavBar from './components/topnavbar/TopNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/contacts-data.json';
import React, { useEffect, useState } from 'react';

export const ContactContext = React.createContext();
function App() {
  const [contacts, setContacts] = useState(data.contacts);
  const [activeContact, setActiveContact] = useState({});
  const [query, setQuery] = useState('');

  const searchContact = (query) => {
    setQuery(query);
  }

  const setSelectedContact = (contact) => {
    setActiveContact({ ...contact });
  }

  const addNewContacts = (contact) => {
    setContacts([...contacts, contact]);
  }
  useEffect(() => {
    const view = document.getElementById('contact-detail-view')
    if (view) {
      view.scrollIntoView();
    }
  }, [activeContact])

  const contactList = query ? contacts.filter((ele) => ele.name.toLowerCase().includes(query.toLowerCase())) : contacts;

  const contactActions = {
    contacts: contactList,
    searchContact,
    setSelectedContact,
    addNewContacts,
    activeContact,
    setContacts
  }

  return (
    <div>
      <Sidebar></Sidebar>
      <TopNavBar></TopNavBar>
      <div className='App-container'>
        <ContactContext.Provider value={contactActions}>
          <Contact></Contact>
        </ContactContext.Provider>
      </div>
    </div>
  );
}

export default App;
