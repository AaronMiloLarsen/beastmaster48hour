import React from 'react';

var x = document.getElementById("demo");

{/* <button onclick="getLocation()">Try It</button> */}

const GeolocationApp = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

export default GeolocationApp;