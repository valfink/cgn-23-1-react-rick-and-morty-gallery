import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";

export default function useCharacters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [nextPageToFetch, setNextPageToFetch] = useState<string>("https://rickandmortyapi.com/api/character");

    useEffect(() => {
        const abortController = new AbortController();
        fetchAndSetNewCharacters(abortController);
        return () => {abortController.abort();}
        // FIXME: Dependency Array
    }, []);

    function fetchAndSetNewCharacters(abortController: AbortController) {
        console.log("Fetching...");
        console.log("URL: " + nextPageToFetch);
        axios.get(nextPageToFetch, {signal: abortController.signal})
            .then(response => {
                setCharacters(c => [...c, ...response.data.results]);
                setNextPageToFetch(response.data.info.next);
                console.log("Next page to fetch: " + response.data.info.next);
            })
            .catch(err => console.error(err));
        console.log("Done 🤗");
    }

    function onScroll() {
        // console.log("Scroll");
        // console.log(event.target.scrollTop);
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            console.log("Load new data")
            const abortController = new AbortController();
            fetchAndSetNewCharacters(abortController);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [nextPageToFetch])

    return {characters}
}