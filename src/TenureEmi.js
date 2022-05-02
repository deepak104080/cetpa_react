import React from 'react';

const TenureEmi = (props) => {
    return(
        <>
        <div className='bg-primary'>
        Tenure - 
        <input type="number" onChange={props.handleClick} value = {props.tenure}/>
        </div>
        </>
    )
}

export default TenureEmi;