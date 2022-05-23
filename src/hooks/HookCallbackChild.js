import React, { useEffect } from 'react';

const HookCallbackChild = ({temp}) => {
    
    useEffect(() => {
        console.log('Child component triggered again...');
    }, [temp])

    return(
        <>  
            <h2>Hook Callback Child Component</h2>
            {temp('Name - ')}
        </>
    )
}

export default HookCallbackChild;