
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/site/Header';
import Cards from './components/site/Cards';
import Banner from './components/site//Banner';
import Footer from './components/site/Footer';


function App() {

  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  Location();
  
  function Location() {
    navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    
  });
    console.log({lat},{long});
  }
  
  return (

    <div className="App">
      <Header />
        <Banner lat={lat} long={long} />
        <Cards lat={lat} long={long} />
      <Footer />
    </div>
  );
  }


export default App;


//ASSIGNMENT OBJECTIVES
// 1. When your application first runs, it needs to grab and store your location. 
// 2. With the location, fire off GET requests to three (3) separate API’s.
// 3. Based on your location, from the NASA Earth API grab a satellite image matching your location, the weather in your current location, and restaurants nearest your location.
// 4. Additionally, add a button that toggles between Fahrenheit and Centigrade when pulling from the weather API.



