import {Episode} from "../model/Episode";
import {useParams} from "react-router-dom";
import {Character} from "../model/Character";
import CharacterGallery from "./CharacterGallery";
import axios from "axios";
import {useEffect, useState} from "react";

type EpisodeDetailViewProps = {
    episodes: Episode[]
}

export default function EpisodeDetailView(props: EpisodeDetailViewProps) {
    const params = useParams();
    const episodeId: string | undefined = params.episodeId;
    const [relatedCharacters, setRelatedCharacters] = useState<Character[]>([]);

    const episode: Episode | undefined = props.episodes.find(e => e.id === parseInt(episodeId ? episodeId : ""));

    useEffect(() => {
        const abortController = new AbortController();
        if (episode) {
            setRelatedCharacters([]);
            episode.characters.forEach(characterURL => {
                axios.get(characterURL, {signal: abortController.signal})
                    .then(response => {
                        setRelatedCharacters(chars => [...chars, response.data]);
                    })
                    .catch(console.error);
            })
        }
        return () => { abortController.abort(); }
    }, [episode])


    return (
        <>
            {episode &&
            <div className={"character-detail-view"}>
                <h2>{episode.name}</h2>
                <dl>
                    <dt>Episode:</dt><dd>{episode.episode}</dd>
                    <dt>Air Date:</dt><dd>{episode.air_date}</dd>
                    <dt>Character Count:</dt><dd>{episode.characters.length}</dd>
                </dl>
                <CharacterGallery characters={relatedCharacters} />
            </div>
            }
        </>
    );
}