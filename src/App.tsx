import React from 'react';
import './App.css';
import Gallery from "./Gallery";
import {Character} from "./Character";

function App() {
    const characters: Character[] = require('./characters.json');
  return (
    <div className="App">
        <h1>The Rick and Morty Characters Gallery</h1>
      <Gallery characters={characters} />
    </div>
  );
}

export default App;
