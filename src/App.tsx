import React from 'react';
import './App.css';
import CharacterGallery from "./component/CharacterGallery";
import {Route, Routes} from "react-router-dom";
import CharacterDetailView from "./component/CharacterDetailView";
import useCharacters from "./hooks/useCharacters";
import Header from "./component/Header";
import EpisodeGallery from "./component/EpisodeGallery";
import useEpisodes from "./hooks/useEpisodes";

function App() {

    const {characters} = useCharacters();
    const {episodes} = useEpisodes();

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                <Route path={"/characters/:characterId"} element={<CharacterDetailView characters={characters}/>}/>
                <Route path={"/episodes"} element={<EpisodeGallery episodes={episodes} />}/>
            </Routes>
        </div>
    );
}

export default App;
