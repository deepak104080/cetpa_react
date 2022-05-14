import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import axios from 'axios';

const ContactApp_Add = (props) => {

    const tempFormData = {username: '', email: ''};
    const [formData, setFormData] = useState(tempFormData);
    const [formError, setFormError] = useState({});
    const [showmessage, setShowmessage] = useState(false);

    const handleInputChange = (e) => {
        //console.log('input clicked....', e.target.name, e.target.value);
        let formname = e.target.name;
        let formvalue = e.target.value;
        setFormData({...formData, [formname]: formvalue});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log('form submitted...');
        // validate(formData);
        //call api for register - formData;
        let obj = {
            id:nanoid(),
            name:formData.username,
            email:formData.email
        }
        console.log('data to be submitted - ', obj);
        // fetch('http://localhost:3006/contacts', {
        //     method: 'POST',
        //     body: {
        //         "id":"1111232123",
        //         "name": "Deepak",
        //         "email": "iewu@jf.com"
        //     },
        //     header: {
        //         'Content-Type': 'application/json'
        //     }
            
        // })
        axios.post('http://localhost:3006/contacts', obj)
        // .then(response => {
        //     return response.json();
        // })
        .then(data => {
            console.log('data from api post call -- ', data);
        })
        setShowmessage(true);
        setFormData(tempFormData);
    }

    useEffect(()=> {
        console.log('Final Form Data', formData);
    })

    useEffect(()=> {
        props.callApi();
    }, [formData])



    return(
        <> 
            <h4>Add New Contact</h4>

            {showmessage && <h2 className='btn btn-outline-success text-success'>Form submitted successfully.</h2>}

        <form>
            <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" name="username" value={formData.username} onChange={handleInputChange}/>
            <div className='text-danger'>{formError.username}</div>
            </div>
            <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" name="email" value={formData.email} onChange={handleInputChange}/>
            <div className='text-danger'>{formError.email}</div>
            </div>
            {/* <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" value={formData.password} onChange={handleInputChange}/>
            <div className='text-danger'>{formError.password}</div>
            </div> */}
            <div class="form-group">
            <button type='submit' class="btn btn-primary" onClick={handleFormSubmit}>Add Contact</button>
            </div>
        </form>

        </>
    )
}

export default ContactApp_Add;

// JSON server is incompatible with fetch