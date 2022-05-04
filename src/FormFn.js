import React, { useEffect, useState } from 'react';

const FormFn = () => {
    const tempFormData = {username: '', email: '', password: ''};
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
        validate(formData);
        if(Object.keys(formError).length == 0) {
            //call api for register - formData;
            setShowmessage(true);
            setFormData(tempFormData);
        }
    }

    useEffect(()=> {
        console.log('Final Form Data', formData);
    })

    const validate = (formData) => {
        const error = {};
        if(!formData.username) {
            error.username = 'Username should not be blank';
        }
        if(!formData.email) {
            error.email = 'Email should not be blank';
        }
        if(!formData.password) {
            error.password = 'Password should not be blank';
        }
        if(formData.password && formData.password.length < 5) {
            error.password = 'Min length of password should be 5';
        }
        // if(formData.username && formData.username.test(regex)) {
        //     error.username = 'Min length of password should be 5';
        // }
        setFormError(error);
    }

    return(
        <>
        <h2>Registration Form</h2>

        {(Object.keys(formError).length == 0 && showmessage) && <h2 className='btn btn-outline-success text-success'>Form submitted successfully.</h2>}

        <form>
            <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" name="username" value={formData.username} onChange={handleInputChange}/>
            <div className='text-danger'>{formError.username}</div>
            </div>
            <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" name="email" value={formData.email} onChange={handleInputChange}/>
            <div className='text-danger'>{formError.email}</div>
            </div>
            <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password" value={formData.password} onChange={handleInputChange}/>
            <div className='text-danger'>{formError.password}</div>
            </div>
            <div class="form-group">
            <button type='submit' class="btn btn-primary" onClick={handleFormSubmit}>Register</button>
            </div>
        </form>
        </>
    )
}

export default FormFn;
