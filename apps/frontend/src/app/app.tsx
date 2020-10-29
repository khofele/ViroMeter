import React, { useEffect, useState } from 'react';
import { Message } from '@virometer-gmbh/api-interfaces';
import './app.css';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <div>
      <div className="header-grid">
        <img className="logo" src="/assets/virometerLogo.png" alt="heart" />
        <h1 className="heading">ViroMeter</h1>
        <div className="togglebutton">Togglebutton</div>
        <div className="menuu">Menu</div>
      </div>
      <div className="grid-container">
        <div className="list">Tabelle</div>
        <div className="map">Map</div>
        <div className="numberbox">Numberbox</div> 
        <div className="verlaufsdiagramm">Verlaufsdiagramm</div>
        <div className="kuchendiagramm">Kuchendiagramm</div>
      </div>
    </div>
  );
};

export default App;
