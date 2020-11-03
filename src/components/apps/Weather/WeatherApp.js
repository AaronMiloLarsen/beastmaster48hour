import React, { useState } from 'react';


const WeatherApp = (props) => {

    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const key = 'c570150f64f3e89bcc9f5861600d77b9';
    const url = `${baseURL}?lat=${props.lat}&lon=${props.long}&appid=${key}`;

    const [weather, setWeather] = useState('');

    fetch(url)

        .then((res) => res.json())
        .then((json) => setWeather(json.main.temp))
        .catch((err) => console.log(err));

    console.log(weather);

    const fahrenheit = Math.round((weather - 273.15) * 1.8 + 32);
    const celcius = Math.round((weather - 273.15));

    return (
        <div>
            <h2>{fahrenheit + '\u00B0 F'}<br /> {celcius + '\u00B0 C'}</h2>
        </div>
    )
}

export default WeatherApp;