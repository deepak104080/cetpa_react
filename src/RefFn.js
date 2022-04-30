import React, { useEffect, useRef, useState } from 'react';
import RefFnChild from './RefFnChild';

const RefFn = () => {  
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const outRef1 = useRef();

    const countRef = useRef(0);

    const childRef = useRef();

    const [count, setCount] = useState(5);

    const handleClick = () => {
        console.log('button clicked...');
        console.log(inputRef1.current.value);
        console.log(inputRef2.current.value);
        let name = inputRef1.current.value;
        let password = inputRef2.current.value;
        //call api for validation
        if(name == 'deepak' && password === '12345') {
            outRef1.current.innerHTML = 'Login Successfull.'
        }
        else {
            outRef1.current.innerHTML = 'Login failed. Try again.'
        }
    }


    const childUpdateCount = () => {
        console.log('Child button clicked....');
        setCount(count => count+5);
    }
    const updateDataOnChild = () => {
        childRef.current.value = 'My name is ABC';
    }


    useEffect(() => {
        console.log('countref triggere on re-render', countRef.current);
        countRef.current = countRef.current + 1;
        console.log('countref triggere on re-render', countRef.current);
    })


    return(
        <>  
        <h2>Ref - Functional Component</h2>
            Name: <input type="text" ref={inputRef1} placeholder="Enter your name"/>
                Password: <input type="text" ref={inputRef2} placeholder="Enter your name"/>
                <button onClick={handleClick} >Click here...</button>
                <div ref={outRef1}></div>




                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div>Count from ref- {countRef.current}</div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <RefFnChild countTemp = {count} countTempFn = {childUpdateCount} ref={childRef} />
                <button onClick={updateDataOnChild}>Click to update ref in child</button>
        </>
    )
}

export default RefFn;
