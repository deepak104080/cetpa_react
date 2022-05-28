import React, { useEffect, useReducer, useState } from "react";

//banking account - numtransatc, balanace, showhidebalance

const HookReducer = () => {
    const initialValues = {
        numTrn: 0,
        balance: 10000,
        showNetBalance: false
    }
    
    // const [numTrn, setNumTrn] = useState(0);
    // const [balance, setBalance] = useState(10000);
    // const [showNetBalance, setShowNetBalance] = useState(false);

    // const [data, setData] = useState(initialValues);

    const reducer = (state, action) => {
        switch(action.type) {
            case 'INCREMENTTRNBYONE':
                return {
                    numTrn: state.numTrn + 1,
                    balance: state.balance,
                    showNetBalance: state.showNetBalance
                }
            case 'WITHDRAW5000':
                return {
                    numTrn: state.numTrn + 1,
                    balance: state.balance - 5000,
                    showNetBalance: state.showNetBalance
                }
            case 'DEPOSIT5000':
                return {
                    numTrn: state.numTrn + 1,
                    balance: state.balance + 5000,
                    showNetBalance: state.showNetBalance
                }
            case 'SHOWHIDENETBALANCE':
                return {
                    numTrn: state.numTrn + 1,
                    balance: state.balance,
                    showNetBalance: !state.showNetBalance
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValues);

    useEffect(() => {
        console.log('component re-triggered - ', state);
    })

    return(
        <>
            <br></br>
            <div>No of Transactions - {state.numTrn} </div>
            <br></br>
            {state.showNetBalance && <div>Balance - {state.balance} </div>}
            <br></br>
            <button onClick={() => dispatch({type: 'INCREMENTTRNBYONE'})} className="btn btn-primary">Do Transaction</button>
            <br></br>
            <button onClick={() => dispatch({type: 'WITHDRAW5000'})} className="btn btn-danger">Withdraw 5000</button>
            <br></br>
            <button onClick={() => dispatch({type: 'DEPOSIT5000'})} className="btn btn-success">Deposit 5000</button>
            <br></br>
            <button onClick={() => dispatch({type: 'SHOWHIDENETBALANCE'})} className="btn btn-info">Show Hide Balance</button>
        </>
    )
}

export default HookReducer;




// if there are a lot of data 
// a lot api calls also

// redux - separate library - js, angular, react
// react-redux

// useReducer

// aws load balancer 

// mumbai - instance - instance - client - pure react - ssr(Server side re)

// api call -chennai

// delhi
// chennai