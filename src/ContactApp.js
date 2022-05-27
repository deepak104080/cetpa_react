import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactApp_Add from './ContactApp_Add';
import ContactApp_Edit from './ContactApp_Edit';
 
const ContactApp = () => {
    const [contacts, setContacts] = useState([]);
    const [editId, setEditId] = useState('');
    const [showEditArea, setShowEditArea] = useState(false);
    const navigate = useNavigate();

    useEffect(() =>{
        apiFn();
    },[])

    const apiFn = () => {
        fetch('http://localhost:3006/contacts')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log('API DATA', data);
            setContacts(data);
        })
    }

    const callApi = () => {
        apiFn();
    }

    useEffect(() => {
        console.log('contacts', contacts);
    })

    const deleteContact = (id) => {
        axios.delete(`http://localhost:3006/contacts/${id}`)
        .then(data => {
            console.log('Response from delete api - ', data);
            apiFn();
        })
    }

    const editContact = (contact) => {
        setEditId(contact);
        setShowEditArea(true);
    }
    const editContactDone = () => {
        setEditId('');
        setShowEditArea(false);
        apiFn();
    }

    function redirectFn () {
        navigate('/redirect', {state: {id: '123', name: 'tempname'}});
    }

    return (
        <>
            <h2>Contact Application</h2>
            <table className='table table-striped'>
            {contacts && contacts.map((temp) => (
                <tr>
                    <td>{temp.id}</td>
                    <td>{temp.name}</td>
                    <td>{temp.email}</td>
                    <td><button onClick={() => editContact(temp)}>Edit</button></td>
                    <td><button onClick={() => deleteContact(temp.id)}>Delete</button></td>
                </tr>
            ))}
            </table>
            <br></br>
            <br></br>
            {showEditArea && <ContactApp_Edit data_edit = {editId} editContactDone={editContactDone}/>}
            <ContactApp_Add callApi={callApi}/>

            <br></br>
            <button onClick={redirectFn}>Redirect to </button>
        </>
    )
}

export default ContactApp;




// dashboard - list of data
// add item
// update