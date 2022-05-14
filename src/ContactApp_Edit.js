import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import axios from 'axios';

const ContactApp_Edit = (props) => {

    const tempFormData = {username: props.data_edit.name, email: props.data_edit.email};
    const [formData, setFormData] = useState(tempFormData);
    const [showmessage, setShowmessage] = useState(false);

    const handleInputChange = (e) => {
        //console.log('input clicked....', e.target.name, e.target.value);
        let formname = e.target.name;
        let formvalue = e.target.value;
        setFormData({...formData, [formname]: formvalue});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let obj = {
            name:formData.username,
            email:formData.email
        }
        console.log('data to be submitted - ', obj);
        axios.put(`http://localhost:3006/contacts/${props.data_edit.id}`, obj)

        .then(data => {
            console.log('data from api post call -- ', data);
            props.editContactDone();
        })
        setShowmessage(true);
        setFormData(tempFormData);
    }

    useEffect(()=> {
        console.log('Final Form Data', formData);
    })

    return(
        <> 
            <h4>Edit Contact</h4>

            {showmessage && <h2 className='btn btn-outline-success text-success'>Form edited successfully.</h2>}

        <form>
            <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" name="username" value={formData.username} onChange={handleInputChange}/>
            </div>
            <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" name="email" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div class="form-group">
            <button type='submit' class="btn btn-primary" onClick={handleFormSubmit}>Edit Contact</button>
            </div>
        </form>

        </>
    )
}

export default ContactApp_Edit;
