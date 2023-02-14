import React from 'react';
import './App.css';
import Gallery from "./Gallery";

function App() {
    const characters = require('./characters.json');
  return (
    <div className="App">
        <h1>The Rick and Morty Characters Gallery</h1>
      <Gallery characters={characters} />
    </div>
  );
}

export default App;
