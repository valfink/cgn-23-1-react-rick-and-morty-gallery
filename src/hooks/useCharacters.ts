import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";

export default function useCharacters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    // const [nextPageToFetch, setNextPageToFetch] = useState<string>("https://rickandmortyapi.com/api/character");

    useEffect(() => {
        // TODO: change loading behaviour! For now it loads everything even before visiting the character gallery
        function fetchNewCharacters(url: string, abortController: AbortController) {
            console.log("Fetching...");
            console.log("URL: " + url);
            axios.get(url, {signal: abortController.signal})
                .then(response => {
                    setCharacters(c => [...c, ...response.data.results]);
                    if (response.data.info.next) {
                        console.log("Next page to fetch: " + response.data.info.next);
                        fetchNewCharacters(response.data.info.next, abortController);
                    }
                })
                .catch(console.error);
            console.log("Done 🤗");
        }
        const firstPageToFetch = "https://rickandmortyapi.com/api/character";
        const abortController = new AbortController();
        fetchNewCharacters(firstPageToFetch, abortController);
        return () => {
            abortController.abort();
        }
    }, []);

    // function fetchAndSetNewCharacters(abortController: AbortController) {
    //     console.log("Fetching...");
    //     console.log("URL: " + nextPageToFetch);
    //     axios.get(nextPageToFetch, {signal: abortController.signal})
    //         .then(response => {
    //             setCharacters(c => [...c, ...response.data.results]);
    //             setNextPageToFetch(response.data.info.next);
    //             console.log("Next page to fetch: " + response.data.info.next);
    //         })
    //         .catch(err => console.error(err));
    //     console.log("Done 🤗");
    // }
    //
    // function onScroll() {
    //     // console.log("Scroll");
    //     // console.log(event.target.scrollTop);
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //         console.log("Load new data")
    //         const abortController = new AbortController();
    //         fetchAndSetNewCharacters(abortController);
    //     }
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', onScroll)
    //     return () => window.removeEventListener('scroll', onScroll)
    // }, [nextPageToFetch])

    return {characters}
}