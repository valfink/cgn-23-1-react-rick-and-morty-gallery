import React, {useEffect, useState} from 'react';
import './App.css';
import Gallery from "./component/Gallery";
import {Character} from "./model/Character";
import axios from "axios";

function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [nextPageToFetch, setNextPageToFetch] = useState<string>("https://rickandmortyapi.com/api/character");
    const [fetchNewData, setFetchNewData] = useState<boolean>(true);

    useEffect(() => {
        if (fetchNewData) {
            console.log("Fetching...");
            axios.get(nextPageToFetch)
                .then(response => {
                    setCharacters(c => [...c, ...response.data.results]);
                    setNextPageToFetch(response.data.info.next);
                })
                .catch(err => console.error(err));
            console.log("Done 🤗");
            setFetchNewData(false);
        }
    }, [fetchNewData, nextPageToFetch]);

    function onScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setFetchNewData(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
    <div className="App">
        <h1>The Rick and Morty Characters Gallery</h1>
      <Gallery characters={characters}  />
    </div>
  );
}

export default App;
