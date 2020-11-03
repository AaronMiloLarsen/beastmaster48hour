import React, { useState } from 'react';




const WeatherApp = (props) => {

const key = 'c570150f64f3e89bcc9f5861600d77b9'

const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${key}`

const [weather, setWeather] = useState('');

fetch(url)

        .then((res) => res.json())
        .then((json) => setWeather(json.main.temp))
        .catch((err) => console.log(err));
        // .then(res => res.json())
        // .then(json => console.log(json))         
        // .then(json => displayWeather(json))
        // .catch(err => console.log(err));

        // console.log(`This is the url: ${url}.`);
        // console.log(`The longitude is: ${props.long}.`);
        // console.log(`The latitude is: ${props.lat}.`);

        // function displayWeather(json){
        //     let weather = json.;
            // let temp = weather.main;
        
            console.log(weather); 
        // }
   
        /* When the input field receives input, convert the value from fahrenheit to celsius */
        const fahrenheit = Math.round((weather - 273.15)*1.8 + 32);
        const celcius = Math.round((weather - 273.15));
        return (
            <div>
                <h2>{fahrenheit + '\u00B0 F'}<br /> {celcius + '\u00B0 C'}</h2>
            </div>
        )
}

export default WeatherApp;