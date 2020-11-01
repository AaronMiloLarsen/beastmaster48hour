import React, { useState } from 'react';
import NasaResults from './NasaResults'
import GeolocationApp from '../Geolocation/GeolocationApp';
const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'usSrucaaMXJk5NrQq1V8ea9BYWGn5rRYGOKvZCc6';

const NasaApp = (props) => {
    
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?lon=${''}&lat=${''}$api_key=${key}`;

        fetch(url)
            .then(results => results.json())
            .then(data => setResults(data.response.docs))
            .catch(err => console.log(err));
    };

    return (
        <div className="main">
            <div className="mainDiv">

            </div>
        </div>

    )
};

export default NasaApp;