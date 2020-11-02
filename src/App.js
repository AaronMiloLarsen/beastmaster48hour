import './App.css';
import { useEffect, useState } from 'react';

import Cards from './components/site/Cards/Cards'
import Banner from './components/site/Home/Banner'
import Zomato from './components/apps/Zomato/Zomato'

function App() {

  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => Location(),[])
  
  function Location() {

    navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    
  });
    console.log({lat},{long});
  }
  
  return (
    <div>
    <p>Your coordinates are: Latitude: {lat} and Longitude: {long} </p>
    <Banner lat={lat} long={long}/>
    <Cards />
    <Zomato lat={lat} long={long}/>
    </div>
  );
  }


export default App;
