import React from 'react';

const NasaApp = (props) => {

    const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
    const key = 'CoHRP5CgzAyE4Kt6UcR8VA6giZhude7bLDCwUVpS';
    const url = `${baseURL}?lon=${props.long}&lat=${props.lat}&api_key=${key}`;

    fetch(url) 
        .then((res) => res.json())
        .catch(err => console.log(err));
    
        console.log(`This is the url: ${url}.`);
        console.log(`The longitude is: ${props.long}.`);
        console.log(`The latitude is: ${props.lat}.`);

    return (
        <div>
           <img src={url} alt="satellite" height="150px" width="150px" />
        </div>
    )
}

export default NasaApp;