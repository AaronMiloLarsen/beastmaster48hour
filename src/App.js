import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Cards from './components/site/Cards';
import Banner from './components/site/Banner';

function App() {

  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')

  useEffect(() => Location())

  function Location() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log({ lat }, { long });
  }

  return (
    <div className="App">
      <Banner />
      <Cards lat={lat} long={long} />
    </div>
  );
}

export default App;
