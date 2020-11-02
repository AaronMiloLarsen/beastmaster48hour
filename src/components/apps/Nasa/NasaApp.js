import React, { useState } from 'react';
import GeolocationApp from '../Location/GeolocationApp';

const NasaApp = (props) => {

    const [nasaResults, setNasaResults] = useState('');

    const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
    const key = 'JIccQU9CY3h69cCuHQHZMSTwVfQKugUJGmwGudEB';
    
    const fetchResults = () => {
        // let url = `${baseURL} + '?lon=' + '02583039999999' + '&lat=' + '40.173567999999996' + '$api_key=' + ${key}`;

        let url = `${baseURL} + '?lon=' + ${props.long} + '&lat=' + ${props.lat} + '$api_key=' + ${key}`;
        
        console.log(url);

        fetch(url)
            .then(function (result) {
                console.log(result)
                return result.json();
            })
            .then(function (json) {
                console.log(json);
                setNasaResults(json);
            })
    };

    fetchResults();

    return (
        <div className="main">
            <div className="mainDiv">
                <img src="null" alt="satellite"></img>
            </div>
        </div>
    )
}

export default NasaApp;
