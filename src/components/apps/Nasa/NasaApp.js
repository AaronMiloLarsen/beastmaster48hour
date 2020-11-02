import React, { useEffect, useState } from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/imagery/';
const key = 'JIccQU9CY3h69cCuHQHZMSTwVfQKugUJGmwGudEB';

const NasaApp = (props) => {
    const [nasaImage, setNasaImage] = useState('');

    useEffect(() => {
        if (nasaImage) {

            let url = `${baseURL}?lon=${props.long}&lat=${props.lat}$api_key=${key}`;
            console.log(`This is the url: ${url}.`);
            console.log(`The longitude is: ${props.long}.`);
            console.log(`The latitude is: ${props.lat}.`);

            fetch(url)
                .then(res => res.blob())
                .then(blob => {
                    let nasaImage = URL.createObjectURL(blob);
                    setNasaImage(nasaImage);
                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <div>
            <img src="{nasaImage}" alt="satellite" height="200px" width="200px"></img>
        </div>
    );
};

export default NasaApp;
