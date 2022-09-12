import Avatar from '../avatar/Avatar';
import './ContactList.scss';
import { ContactContext } from '../../App';
import { useContext } from 'react';



function ContactList(props) {
    const { contacts, activeContact, setSelectedContact } = useContext(ContactContext);

   

    const onContactSelect = (contact) => {
        setSelectedContact({ ...contact });
    }

    return (
        <>
            {
                contacts.map((contact) => {
                    return (
                        <div key={contact.id} className='table-data'>
                            <div onClick={() => onContactSelect(contact)} className='row'>
                                <div className='col-2'>
                                    <div><input checked={activeContact.id === contact.id} onChange={()=>{}} type='checkbox'></input></div>
                                </div>
                                <div className='col-5'>
                                    <div className='basic-info'>
                                        <div>
                                            <Avatar initials={contact.name} size={35}></Avatar>
                                        </div>
                                        <div className='contact-info'>
                                            <div className='contact-name'>{contact.name}</div>
                                            <div className='contact-email'>{contact.email}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-5 company-row'>
                                    <div>{contact.company}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default ContactList;