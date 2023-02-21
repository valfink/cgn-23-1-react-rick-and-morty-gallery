import {Link, useParams} from "react-router-dom";
import {Character} from "../model/Character";
import "./CharacterDetailView.css"
import {useEffect, useState} from "react";
import {Episode} from "../model/Episode";
import axios from "axios";
import EpisodeGallery from "./EpisodeGallery";

type CharacterDetailViewProps = {
    characters: Character[]
}

export default function CharacterDetailView(props: CharacterDetailViewProps) {
    const params = useParams();
    const characterId: string | undefined = params.characterId;
    const [relatedEpisodes, setRelatedEpisodes] = useState<Episode[]>([]);

    const character: Character | undefined = props.characters.find(c => c.id === parseInt(characterId ? characterId : ""));

    useEffect(() => {
        const abortController = new AbortController();
        if (character) {
            setRelatedEpisodes([]);
            character.episode.forEach(episodeURL => {
                axios.get(episodeURL, {signal: abortController.signal})
                    .then(response => {
                        setRelatedEpisodes(eps => [...eps, response.data]);
                    })
                    .catch(console.error);
            })
        }
        return () => { abortController.abort(); }
    }, [character])

    return (
        <>
            {character &&
                <div className={"character-detail-view"}>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name}/>
                    <dl>
                        <dt>Status:</dt><dd>{character.status}</dd>
                        <dt>Species:</dt><dd>{character.species}</dd>
                        <dt>Created:</dt><dd>{character.created}</dd>
                        <dt>Gender:</dt><dd>{character.gender}</dd>
                        <dt>URL:</dt><dd>{character.url}</dd>
                        <dt>Episode Count:</dt><dd>{character.episode.length}</dd>
                    </dl>
                    <h3>Episodes</h3>
                    <EpisodeGallery episodes={relatedEpisodes} />
                </div>
            }
            <br/><Link to={"/characters"}>Back to List</Link>
        </>
    );
}