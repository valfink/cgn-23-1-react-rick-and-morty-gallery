import {useEffect, useState} from "react";
import {Episode} from "../model/Episode";
import axios from "axios";

export default function useEpisodes() {
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        // TODO: change loading behaviour (see character loading)!
        function fetchNewEpisodes(url: string, abortController: AbortController) {
            axios.get(url, {signal: abortController.signal})
                .then(response => {
                    // console.log(response.data.results);
                    setEpisodes(e => [...e, ...response.data.results]);
                    // if (response.data.info.next) {
                    //     fetchNewEpisodes(response.data.info.next, abortController);
                    // }
                })
                .catch(console.error);
        }

        const firstPageToFetch = "https://rickandmortyapi.com/api/episode";
        const abortController = new AbortController();
        fetchNewEpisodes(firstPageToFetch, abortController);
        return () => {
            abortController.abort();
        };
    }, []);

    return {episodes}
}