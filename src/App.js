import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/site/Header'
import Banner from './components/site/Banner';
import Cards from './components/site/Cards';
import Footer from './components/site/Footer';

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
      <Header />
        <Banner lat={lat} long={long} />
        <Cards lat={lat} long={long} />
      <Footer />
    </div>
  );
}

export default App;
