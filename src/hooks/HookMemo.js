import React, { useEffect, useState, useMemo } from 'react';


const HookMemo = () => {
    const [subscribe, setSubscribe] = useState(false);
    const [cars, setCars] = useState(['Maruti', 'Toyota', 'Tata', 'Honda', 'Hyundai', 'Kia']);

    const subscribeFn = () => {
        setSubscribe(!subscribe);
    }

    useEffect(() => {
        console.log('User subscribed - toggle', subscribe);
    })

    const displayCars = (cars) => {
        console.log('----list of cars rendered again------')
        const cars_jsx = cars && cars.map((item) =>(
            <li>{item}</li>
        ))
        return cars_jsx;
    }

    const renderCars = useMemo(()=>displayCars(cars), [cars] )

    const addCarFn = () => {
        console.log('car added-----');
        setCars([...cars, 'NewCar'])
    }

    return(
        <>
            <h2>List of cars</h2>
            <ul>
                {/* {displayCars(cars)} */}
                {renderCars}
            </ul>
            <br></br>
            <button onClick={subscribeFn}>Subscribe</button>
            <br></br>
            <button onClick={addCarFn}>Add Car</button>
        </>
    )
}


export default HookMemo;