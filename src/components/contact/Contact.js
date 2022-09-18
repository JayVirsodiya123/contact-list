import { faContactBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import Avatar from '../avatar/Avatar';
import './Contact.scss';
import { ContactContext } from '../../App';
import ContactList from '../contactlist/ContactList';
import ContactForm from '../contactform/ContactForm';



function Contact(props) {

    const { searchContact, contacts, activeContact } = useContext(ContactContext);

    let searchTimeout ;

    const [contactModal, setContactModal] = useState(false);
    const [formMode, setFormMode ] = useState('new');

    const onSearchChange = (evt) => {
        if(searchTimeout){
            clearTimeout(searchTimeout);
        }
       searchTimeout =  setTimeout(()=>{
            searchContact(evt.target.value);
        },1000)
        
    }

    const onContactModalClose  = (isOpen, mode = 'new') => {
        setContactModal(isOpen);
        setFormMode(mode);
        
    }

    const  onContactEdit = () => {
        setFormMode('edit');
        setContactModal(true);
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
                        {!(contacts.length) && <div className='d-flex justify-content-center align-items-center p-4 fw-bold'>No Contact Found !</div>}
                        {!(!contacts.length) && <ContactList />}
                            
                        </>
                    </div>
                    {activeContact.id &&
                        <div className='col-md-12 col-lg-6'>
                            <div className='contact-detail' id="contact-detail-view">
                                <div className='d-flex justify-content-end pe-4'>
                                    <button type="button" className="btn btn-secondary" onClick={()=>{onContactEdit()}}>Edit</button>
                                </div>
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
                                        <div className='col-md-4'>
                                            Company :
                                        </div>
                                        <div className='col-md-8'>
                                            <span className='info'>{activeContact.company}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {contactModal && <ContactForm mode={formMode} setContactModal={onContactModalClose}></ContactForm>}
        </div>
    );
}

export default Contact;