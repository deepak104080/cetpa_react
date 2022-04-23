import React, { useEffect, useState } from 'react';

const FnCompAPI = () => {
    const [apiDataArr, setApiDataArr] = useState([1,2,3,4,5]);
    // const [apiDataObj, setApiDataObj] = useState({});


    useEffect(() => {
        fetch('https://api.publicapis.org/entries')
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            setApiDataArr(data.entries);
            // setApiDataObj(data)
        })
        console.log(apiDataArr);
        // console.log(apiDataObj);
    },[])


    // useEffect(() =>{
    //     manipulate data
    //     Array.map(
    //         do all manipulations
    //     )
    //     store in new state variabble
    // }, [old state variable])
    
    return(
        <>
            <div>This is a functional component.</div>
            
            {apiDataArr && apiDataArr.map((item) => (
                <div>{item.Description}</div>
            ))}
            {/* {apiDataArr.USD && apiDataArr.USD.code}
            {apiDataArr.USD && apiDataArr.USD.description} */}
        </>
    )
}

export default FnCompAPI;
