import React, {useState} from 'react';




const WeatherDetails = (props) => {

    const key = 'c570150f64f3e89bcc9f5861600d77b9'
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${key}`

    const [details, setDetails] = useState('');
    

    fetch(url)

        .then((res) => res.json())
        .then((json) => setDetails(json.weather[0].description))
        .catch((err) => console.log(err));
        console.log(details);

        return(
            <div>
                <h3>Today's forecast: {details}</h3>
            </div>
        )
}

export default WeatherDetails;
