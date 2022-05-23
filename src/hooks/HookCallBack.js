import React, { useCallback, useState } from 'react';
import HookCallbackChild from './HookCallbackChild';

const HookCallback = () => {
    
    const [show, setShow] = useState(false);
    const [tempName, setTempName] = useState('Default Name');

    // const renderCars = useMemo(()=>displayCars(cars), [cars] )
    const renderChildComp = useCallback((temp) => {
        return 'New Name - ' + temp + tempName
    }, [tempName])

    return(
        <>  
            <button onClick={() => setShow(!show)}>Internal Show Hide</button>
            {show && <p>Hidden Content</p>}
        <br></br>
        <div>-----------------------</div>
            <button onClick={() => setTempName('New Temp Name xyz')}>Child Name Update </button>
            <HookCallbackChild temp={renderChildComp} />
        </>
    )
}

export default HookCallback;