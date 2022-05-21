import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import { DataAppContext } from '../DataApp';

const ProtectedRoute = (props) => {
    const {children} = props;
    const temp = useContext(DataAppContext);
    console.log('temp------------------', temp);
    const {appstate, login_user} = temp;
    const {loginstatus} = appstate;
    // const redirecturl = 'http://localhost:3000/github';
    if(!loginstatus) { 
        return <Navigate to="/login" replace/>
    }

    return children;
}

export default ProtectedRoute;
