import React, { useState } from 'react';
import NasaResults from './NasaResults'
const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'usSrucaaMXJk5NrQq1V8ea9BYWGn5rRYGOKvZCc6';




const NasaApp = () => {
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?lon=${lon}&lat=${lat}$api_key=${key}`;

        fetch(url)
            .then(res => res.json())
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