import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';



const WeatherApp = (props) => {

    const key = 'c570150f64f3e89bcc9f5861600d77b9'
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${key}`
    const [weather, setWeather] = useState('');
    

    fetch(url)

        .then((res) => res.json())
        .then((json) => setWeather(json.main.temp))
        .catch((err) => console.log(err));
        console.log(weather);

        /* When the input field receives input, convert the value from fahrenheit to celsius */
        const fahrenheit = Math.round((weather - 273.15)*1.8 + 32) ;
        const celcius = Math.round((weather - 273.15));
        const [ temp, setTemp ] = useState(fahrenheit);
  
        let styles = {
            temp: temp
        };
    
// using a ternary operator to check what current value is, and setting it accordingly
        const toggleTemp = () => {
            temp === (fahrenheit + '\u00B0 F') ? setTemp(celcius + '\u00B0 C') : setTemp(fahrenheit + '\u00B0 F');
        }
        return (
            <div className="main">
                <div className="mainDiv">
                    <div style={styles}>
                        <FunctionalComponent string= "" function={toggleTemp} selectedStyle={ temp }/>
                    </div>
                </div>
            </div>
            )
}

export default WeatherApp;


const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button className="weatherBtn" onClick={props.function}>Click Here</button>
            <TempChangeComponent selectedStyle={ props.selectedStyle } />
        </div>
    )
}

const TempChangeComponent = (props) => {
    return (
        <div>
            <p className="weatherDetails">The current temperature is : { props.selectedStyle }</p>
        </div>
    )
}

