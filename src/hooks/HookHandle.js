import { Button } from 'bootstrap';
import React, { useState, useRef } from 'react';
import HookHandleChild from './HookHandleChild';

const HookHandle = () => {
    const buttonRef = useRef(null);
    return(
        <>  
            <button onClick={() => {buttonRef.current.toggleFn()}}>Click to show from parent. </button>
            <HookHandleChild ref={buttonRef}/>
        </>
    )
}

export default HookHandle;