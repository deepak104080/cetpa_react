import React, {useContext} from 'react';
import { DataAppContext } from '../DataApp';

const Accounts = (props) => {
    const temp = useContext(DataAppContext);
    console.log('temp------------------', temp);
    const {appstate, logout_user} = temp;
    const {loginstatus, username} = appstate;
    return(
        <>
        <div className='row bg-info'>
                <div className='col-12'>
                
                    <button className="btn btn-primary btn-sm" onClick={logout_user}>
                        {
                            loginstatus ? <span>Logout</span> : <span>Login</span>
                        }
                    </button>
                    Welcome - {loginstatus && username}
                    {/* login_temp.loginstatus ? <button onClick={login_temp.login}></button> : <button onClick={login_temp.login}>Login</button> */}
                    </div>
            </div>
        <h3>Accounts Dashboard</h3>
        </>
    )
}

export default Accounts;
