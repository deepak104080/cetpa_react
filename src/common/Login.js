import React, {useContext, useEffect} from 'react';
import { DataAppContext } from '../DataApp';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';

// useNavigate, useLocation

const Login = (props) => {
    const temp = useContext(DataAppContext);
    console.log('temp------------------', temp);
    const {appstate, login_user} = temp;
    const {loginstatus} = appstate;
    const handleLogin = () => {
        console.log('login button clicked...');
        //api call for checking login
        //token, role, userid, sesssionid, username
        login_user();
    }
    useEffect(() => {
        console.log('-----login useeffect-----');
        // if(loginstatus) {
        //     <Navigate to="/login" replace/>
        // }
    })


    if(loginstatus) {
        return <Navigate to="/accounts" replace/>
    }

    
    return(
        <><br></br>
        <h3>Login Form</h3><br></br>
        Username: <input type="text" name='username'/>
        <br></br>
        Password: <input type="password" name='password'/><br></br>
        <button onClick={handleLogin}>Login</button>
        <br></br><br></br>
        </>
    )
}

export default Login;


{/* login Page
token / true / 200 OK
localStorage/sessionStorage/react redux/context - isUserLoggedIn, {isUserLoggedIn: true, userid: 'aiud', username: ''} */}