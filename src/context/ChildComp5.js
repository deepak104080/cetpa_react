import React, {useContext} from 'react';
import { WeatherContext } from './DataTemp';

const ChildComp5 = () => {
    const localTemp = useContext(WeatherContext)
    return(
        <>
            Temp in Child 5 - {localTemp.val}
            <br></br>
            <button onClick={localTemp.valMethod}>Update temp</button>
        </>
    )
}

export default ChildComp5;