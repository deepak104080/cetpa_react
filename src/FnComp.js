import React, { useState } from 'react';

const FnComp = () => {
    const [count, setCount] = useState(10000000);
    const [count2, setCount2] = useState([1,2,3,4,5]);
    const [status, setStatus] = useState(true);

    // count - state variable - its not an object - normal variable
    // 0 - defining the type of state variable and initializing its value
    // setCount - method to update that state variable
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
    return(
        <>
            <div>This is a functional component.</div>
            <div>{count}</div>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>

            {status && <div></div>}

            {/* Try - Show hide an element on a button click */}
        </>
    )
}

export default FnComp;

















// REACT HOOKS
// State - useState
// wordpress - hooks

