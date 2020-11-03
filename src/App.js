import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import Cards from './components/site/Cards/Cards'
import Banner from './components/site/Home/Banner'
// import Zomato from './components/apps/Zomato/Zomato'

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
    <div>
    <Banner lat={lat} long={long}/>
    <Cards lat={lat} long={long}/>
    </div>
  );
  }


export default App;
