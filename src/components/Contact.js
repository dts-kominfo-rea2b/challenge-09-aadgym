// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './style.contact.css';

const Contact = ({data}) => {
    return (
        <div className="card">
            <img className="profpic" src={data.photo}/>
            <div>
                <p><b>{data.name}</b></p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;