import React, { useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    // console.log(process.env.REACT_APP_X_RAPIDAPI_KEY);
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
            params: {lat: '35.5', lon: '-78.5'},
            headers: {
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY
            }
        }
        axios.request(options)
        .then(response => console.log(response))
    })
    return(
        <>
            City name, temerature, rainfall, wind direction, cloud, humidity
        </>
    )
}

export default Weather;



//https://rapidapi.com/weatherapi/api/weatherapi-com/