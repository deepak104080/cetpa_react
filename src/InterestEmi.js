import React from 'react';

const InterestEmi = (props) => {
    return(
        <>
        <div className='bg-warning'>
        Interest - 
        <input type="number" onChange={props.handleClick} value= {props.interest}/>
        </div>
        </>
    )
}

export default InterestEmi;