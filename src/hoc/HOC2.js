import React, { useState } from 'react';
import withHoc  from './HOC';

const states = ['delhi', 'haryana', 'up', 'west bengal', 'bihar', 'mp', 'tamilnadu'];
const HOC2 = (props) => {
    const [states, setStates] = useState(['delhi', 'haryana', 'up', 'west bengal', 'bihar', 'mp', 'tamilnadu'])
    return(
        <>
            {/* {
                    states && states.map((item) => (
                        <div>{item}</div>
                    ))
                } */}
            <h4>Data from filter</h4>
                {
                    props.dataRet && props.dataRet.map((item) => (
                        <div>{item}</div>
                    ))
                }
        </>
    )
}

export default withHoc(HOC2, states);