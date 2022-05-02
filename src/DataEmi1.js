import React from 'react';

const DataEmi1 = (props) => {
    let compamount = props.data.amount * Math.pow((1+ (props.data.interest/100)),  props.data.tenure);
    return(
        <> 
        <div className='col-6 bg-secondary border border-primary rounded bg-opacity-10'>
            Principal = {props.data.amount}
            <br></br>
            Interest = {compamount - props.data.amount}
            <br></br>
            Amount = {compamount}
            <br></br>
        </div>
        </>
    )
}

export default DataEmi1;