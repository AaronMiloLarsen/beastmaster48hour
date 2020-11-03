import React, { useState } from 'react';

const Location = (props) => {

    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const key = 'c570150f64f3e89bcc9f5861600d77b9';
    const url = `${baseURL}?lat=${props.lat}&lon=${props.long}&appid=${key}`;

    const [location, setLocation] = useState('');

    fetch(url)
        .then((res) => res.json())
        // .then((json) => console.log(json))
        .then((json) => setLocation(json.name))
        .catch((err) => console.log(err));

    console.log(location);

    return (
        <div>
            <h5>Location: {location}</h5>
        </div>
    )
}

export default Location;