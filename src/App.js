import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Cards from '../src/components/site/Cards';
import Banner from '../src/components/site/Home/Banner';


function App() {

  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  // useEffect(() => Location(),[])
  Location();

  function Location() {

    navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    
  });
    console.log({lat},{long});
  }
  
  return (
    <div>
   
    <Banner />
  
    <Cards lat={lat} long={long} />
    
    </div>
  );
  }


export default App;


//ASSIGNMENT OBJECTIVES
// 1. When your application first runs, it needs to grab and store your location. 
// 2. With the location, fire off GET requests to three (3) separate API’s.
// 3. Based on your location, from the NASA Earth API grab a satellite image matching your location, the weather in your current location, and restaurants nearest your location.
// 4. Additionally, add a button that toggles between Fahrenheit and Centigrade when pulling from the weather API.



