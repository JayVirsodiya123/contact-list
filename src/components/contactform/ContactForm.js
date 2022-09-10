import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ContactContext } from '../../App';

function ContactForm(props) {

    const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '' });
    const [error, setError] = useState('');

    const { addNewContacts, contacts } = useContext(ContactContext);

    const onContactFormChange = (evt) => {
        if(error){
            setError('');
        }
        setContactForm({ ...contactForm, [evt.target.name]: evt.target.value });
    }

    const onFormSubmit = () => {
        if(!contactForm.name.trim()){
            setError('Name is required');
            return;
        } else if(!contactForm.email.trim()){
            setError('Email is required');
            return;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email))){
            setError('Enter valid email');
            return;
        } else if(!contactForm.phone.trim()) {
            setError('Phone number is required');
            return;
        } else if(!(/^\d{10}$/.test(contactForm.phone)|| /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(contactForm.phone))){
            setError('Enter valid phone number');
            return;
        }
        
        const id = contacts.length + 1;
        const contact = {
            id,
            name : contactForm.name,
            email: contactForm.email,
            phone: contactForm.phone
        }
        addNewContacts(contact);
        setContactForm({ name: '', email: '', phone: '' })
        props.setContactModal(false)
    }

    return (
        <div>
            <Modal size='sm' show={props.contactModal} onHide={() => props.setContactModal(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                    { error  && <div className="alert alert-danger" role="alert">
                       {error}
                    </div>}

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name='name' value={contactForm.name} onChange={onContactFormChange} className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" name='email' value={contactForm.email} onChange={onContactFormChange} className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label >Phone</label>
                        <input type="text" name='phone' value={contactForm.phone} onChange={onContactFormChange} className="form-control" placeholder="Phone" />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button onClick={onFormSubmit} className='btn  btn-primary'>Save</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactForm;