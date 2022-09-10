import { faContactBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import Avatar from '../avatar/Avatar';
import './Contact.scss';
import { ContactContext } from '../../App';
import ContactList from '../contactlist/ContactList';
import ContactForm from '../contactform/ContactForm';



function Contact(props) {

    const { searchContact, activeContact} = useContext(ContactContext);

    


    const [contactModal, setContactModal] = useState(false);

    const onSearchChange = (evt) => {
        searchContact(evt.target.value);
    }

   

   

    return (
        <div className='container-fluid'>
            <div className='contact-container'>
                <div className='contact-header'>
                    <div>
                        <FontAwesomeIcon icon={faContactBook} className="contact-book-icon"></FontAwesomeIcon>
                    </div>
                    <div className='page-head'>
                        <div className='head-text'>Contacts</div>
                        <div className='sub-text'>contact page</div>
                    </div>
                </div>
                <div className='row search-bar'>
                    <div className='col-md-6 col-lg-4 col-sm-12'>
                        <input className='search-input' onChange={onSearchChange} placeholder='Search...'></input>
                    </div>
                    <div className='col-md-4 col-lg-2 col-sm-12'>
                        <button className='contact-add' onClick={() => { setContactModal(true) }}>+ Add Contact</button>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-12  col-lg-6'>
                        <div className='table-head'>
                            <div className='row'>
                                <div className='col-2'>
                                    <div>*</div>
                                </div>
                                <div className='col-5'>
                                    <div>Basic Info</div>
                                </div>
                                <div className='col-5 company-row'>
                                    <div>Company</div>
                                </div>

                            </div>
                        </div>
                        <>
                            <ContactList />
                        </>
                    </div>
                    {activeContact.id &&
                        <div className='col-md-12 col-lg-6'>
                            <div className='contact-detail' id="contact-detail-view">
                                <div className='d-flex  align-items-center flex-column p-4'>
                                    <Avatar initials={activeContact.name} size={100} fontSize={34}></Avatar>
                                    <div>
                                        <div className='text-center contact-name'>{activeContact.name}</div>
                                        <div className='text-center contact-email'>{activeContact.email}</div>
                                    </div>

                                </div>
                                <div className='container'>
                                    <div className='row contact-info-row'>
                                        <div className='col-md-4'>
                                            Name :
                                        </div>
                                        <div className='col-md-8'>
                                            <span className='info'>{activeContact.name}</span>
                                        </div>
                                        <div className='col-md-4'>
                                            Email :
                                        </div>
                                        <div className='col-md-8'>
                                            <span className='info'>{activeContact.email}</span>
                                        </div>
                                        <div className='col-md-4'>
                                            Phone :
                                        </div>
                                        <div className='col-md-8'>
                                            <span className='info'>{activeContact.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ContactForm contactModal={contactModal} setContactModal={setContactModal}></ContactForm>
        </div>
    );
}

export default Contact;