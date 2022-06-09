import './App.css';
import React from 'react';
import etsy from './data/etsy';
import Listing from './components/Listing/Listing';

function App() {
  return (
    <div className="App">
       <Listing items={etsy}/>
    </div>
  );
}

export default App;
