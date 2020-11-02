import React, { useEffect, useState } from 'react';

const GeolocationApp = (props) => {

    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    useEffect(() => Location())

    function Location() {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        console.log({ lat }, { long });
    }

    return (
        <div>
            <p>Your coordinates are: Latitude: {lat} and Longitude: {long} </p>
        </div>
    )
}

export default GeolocationApp;