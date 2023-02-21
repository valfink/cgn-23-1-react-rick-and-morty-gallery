import React from 'react';
import './App.css';
import Gallery from "./component/Gallery";
import {Route, Routes} from "react-router-dom";
import CharacterDetailView from "./component/CharacterDetailView";
import useCharacters from "./hooks/useCharacters";

function App() {

    const {characters} = useCharacters();

    return (
        <div className="App">
            <h1>The Rick and Morty Characters Gallery</h1>
            <Routes>
                <Route path={"/"} element={<Gallery characters={characters}/>}/>
                <Route path={"/characters/:characterId"} element={<CharacterDetailView characters={characters}/>}/>
            </Routes>
        </div>
    );
}

export default App;
