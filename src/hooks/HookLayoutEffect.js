import React, {useEffect, useLayoutEffect, useState} from 'react';


const HookLayoutEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => console.log('useEffect triggered....', count));
    useLayoutEffect(() => console.log('use layout Effect triggered...', count));
    const testEffect = () => {
        console.log('console in return jsx...');
    }

    return(
        <>
            Hooks testing...
            <button onClick={() => setCount(5)}>Update Count</button>
            <button onClick={testEffect}>Test Effect</button>
        </>
    )


    // 1 - useLayoutEffect
    // 2 - return jsx
    // 3 - useEffect
}

export default HookLayoutEffect;