import React, { forwardRef, useImperativeHandle, useState } from 'react';


const HookHandleChild = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        toggleFn() {
            setShow(!show);
        }
    }))

    return(
        <>
        <br></br>
            <div>------------------------</div>
            <h2>Hook Handle Child</h2>
            <button onClick={() => setShow(!show)}>Click to show from child.</button>
            {show && <p>Hidden Content</p>}
        </>
    )
});

export default HookHandleChild;