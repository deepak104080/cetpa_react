import React from 'react';

const AmountEmi = (props) => {
    return(
        <>
        <div className='bg-info'>
        Amount - 
        <input type="number" onChange={props.handleClick} value={props.amount}/>
        </div>
        </>
    )
}

export default AmountEmi;