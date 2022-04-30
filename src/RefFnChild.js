import React, { useEffect, useRef, forwardRef } from 'react';

const RefFnChild = (props, ref) => {  
    const {countTemp, countTempFn } = props;
    useEffect(() => {
        console.log('child triggered after parent...')
    })
    return(
        <>  
            <div>Count from Ref Fn Child (State Varibale) - {countTemp}</div>
            <button onClick={countTempFn}>Click here to change count.</button>

            <br></br>
            <input type="text" ref={ref} />

        </>
    )
}

export default forwardRef(RefFnChild);
