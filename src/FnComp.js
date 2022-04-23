import React, { useEffect, useState } from 'react';

const FnComp = () => {
    const [count, setCount] = useState(10000000);
    const [count2, setCount2] = useState([1,2,3,4,5]);
    const [status, setStatus] = useState(false);

    // count - state variable - its not an object - normal variable
    // 0 - defining the type of state variable and initializing its value
    // setCount - method to update that state variable - async mode
    // Boolean, string, array, object, number
    //names can be anything - variable and method
    // state varibale can be manipulated just by its own method
    //method cant update anything else

    
    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count => count - 1);
    }
    const showDiv = () => {
        setStatus(status => !status);
        console.log(status);
    }

    useEffect(() => {
        console.log(count, count2, status);
        console.log('Use Effect triggered every time........')
    })
    // componentDidMount and componentDidUpdate

    useEffect(() => {
        console.log(count, count2, status);
        console.log('Use Effect triggered once....')
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((resp) => {
        return resp.json();
        })
        .then((data) => {
        console.log(data);
        })
    },[])
    //componentDidMount

    useEffect(() => {
        console.log(count, count2, status);
        console.log('Use Effect triggered on status update....')
    },[status])
    //componentDidMount


    
    return(
        <>
            <div>This is a functional component.</div>
            <div>{count}</div>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>

            {status && <div><h2>Div to show hide</h2></div>}

            <button onClick={showDiv}>Show Hide Button</button>

            {/* HW - Implement Modal */}

            {/* {data.bpi && data.bpi.map((item) => (
                <div>{item.code}</div>
            ))} */}
        </>
    )
}

export default FnComp;

















// REACT HOOKS
// State - useState
// wordpress - hooks

// useEffect - Lifecycle logics


