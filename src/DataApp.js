import React, { useState } from 'react';


const DataAppContext = React.createContext();


const DataApp = (props) => {
    const initialValues = {loginstatus: false, username: 'User 1', balanceAmount: 0, bgColor: 'white'}
    const [appstate, setAppState] = useState(initialValues);

    const login = () => {
        setAppState({...appstate, loginstatus: !appstate.loginstatus});
    }
    const login_user = () => {
        setAppState({...appstate, loginstatus: true});
    }
    const logout_user = () => {
        setAppState({...appstate, loginstatus: false});
    }
    const updateBgColor = (color) => {
        setAppState({...appstate, bgColor: color});
    }
    // const addBalance = (e) => {
    //     console.log('e.target.value', e.target.value, typeof(e.target.value))
    //     setAppState({...appstate, balanceAmount: appstate.balanceAmount + parseInt(e.target.value)});
    // }
    // const subBalance = (e) => {
    //     console.log('e.target.value', e.target.value, typeof(e.target.value))
    //     setAppState({...appstate, balanceAmount: appstate.balanceAmount - parseInt(e.target.value)});
    // }
    const addBalance = (temp) => {
        console.log('temp', temp, typeof(temp))
        setAppState({...appstate, balanceAmount: appstate.balanceAmount + parseInt(temp)});
    }
    const subBalance = (temp) => {
        console.log('temp', temp, typeof(temp))
        setAppState({...appstate, balanceAmount: appstate.balanceAmount - parseInt(temp)});
    }

    return(
        <DataAppContext.Provider value={{appstate, login, addBalance, subBalance, login_user, logout_user, updateBgColor}}>
            <div className='container app-wrapper' style={{'background': appstate.bgColor}}>
                {props.children}
            </div>
        </DataAppContext.Provider>
    )
}

export default DataApp;

export {DataAppContext};


// Provide and Concumer can be used in functional Component, but useContext can not be used in Class Component.
// React Context - https://www.carlrippon.com/static/0d1f722d0fe4c2bc4c3d71595dbe67dd/ca682/prop-drilling-v-context.png