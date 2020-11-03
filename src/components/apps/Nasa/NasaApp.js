import React, { useState } from 'react';

const NasaApp = (props) => {

    const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
    const key = 'PIMTRqsKNvZj2rk5J5iWuDP6QGg5pjOnpOpkazis';
    const url = `${baseURL}?lon=${props.long}&lat=${props.lat}&api_key=${key}`;

    const [nasaImage, setNasaImage] = useState('');

    fetch(url)
        .then((res) => res.json())
        .then((json) => setNasaImage(json.main))
        .catch(err => console.log(err));

    console.log(nasaImage);
    console.log(`This is the url: ${url}.`);
    console.log(`The longitude is: ${props.long}.`);
    console.log(`The latitude is: ${props.lat}.`);


    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <img onLoadStart={(e) => handleSubmit(e)} src={url} alt="satellite" height="150px" width="150px" />
        </div>
    )
}

export default NasaApp;