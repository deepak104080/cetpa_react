import React, { useState } from 'react';


const DataAppContext = React.createContext();


const DataApp = (props) => {
    const initialValues = {loginstatus: false, username: 'User 1', balanceAmount: 0}
    const [appstate, setAppState] = useState(initialValues);

    const login = () => {
        setAppState({...appstate, loginstatus: !appstate.loginstatus});
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
        <DataAppContext.Provider value={{appstate, login, addBalance, subBalance}}>
            {props.children}
        </DataAppContext.Provider>
    )
}

export default DataApp;

export {DataAppContext};