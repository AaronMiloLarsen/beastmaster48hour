import React, { useState } from "react";

const GeolocationApp = (props) => {

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    let location = {
        latitude: latitude,
        longitude: longitude
    };

    const showLocation = (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        console.log("Geolocation is not supported by this device.");
    };
}

// console.log(`Latitude is ${latitude}, and Longitude is ${longitude}.`)

export default GeolocationApp;





// const GeolocationApp = (props) => {

//     // const [lat, setLat] = useState('')
//     // const [long, setLong] = useState('')

//     const latitude = position.coords.longitude;
//     const longitude = position.coords.latitude;

//     // const location = () => {
//     //     setLat(position.coords.latitude)
//     //     setLong(position.coords.longitude)
//     // };

//     const getLocation = () => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             console.log("Latitude is :", props.position.coords.latitude);
//             console.log("Longitude is :", props.position.coords.longitude);
//         })
//             // .then(res = res.json())
//             .then(rObj => {
//                 console.log(rObj)
//                 getLocation()
//                 // location()
//                 props.location()
//             })
//     }
// }

