import React, {useState} from 'react';
import './App.css';
import Gallery from "./component/Gallery";
import {Character} from "./model/Character";
import jsonCharacters from "./characters.json";
import TwoButtonsAndNumber from "./component/TwoButtonsAndNumber";

function App() {
    const characters: Character[] = jsonCharacters;
    const [showFrom, setShowFrom] = useState<number>(0);
    const [showUntil, setShowUntil] = useState<number>(40);
  return (
    <div className="App">
        <h1>The Rick and Morty Characters Gallery</h1>
        Show from:
        <TwoButtonsAndNumber
            currentNumber={showFrom}
            increaseCurrentNumber={() => setShowFrom(Math.min(showFrom + 1, showUntil - 1))}
            decreaseCurrentNumber={() => setShowFrom(Math.max(showFrom - 1, 0))}
        /><br />
        Show until:
        <TwoButtonsAndNumber
            currentNumber={showUntil}
            increaseCurrentNumber={() => setShowUntil(Math.min(showUntil + 1, characters.length))}
            decreaseCurrentNumber={() => setShowUntil(Math.max(showUntil - 1, showFrom + 1))}
        />
      <Gallery characters={characters}  startingAt={showFrom} stoppingAt={showUntil}/>
    </div>
  );
}

export default App;
