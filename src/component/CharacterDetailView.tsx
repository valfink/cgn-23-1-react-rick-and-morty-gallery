import {Link, useParams} from "react-router-dom";
import {Character} from "../model/Character";
import "./CharacterDetailView.css"

type CharacterDetailViewProps = {
    characters: Character[]
}

export default function CharacterDetailView(props: CharacterDetailViewProps) {
    const params = useParams();
    const characterId: string | undefined = params.characterId;

    const character: Character | undefined = props.characters.find(c => c.id === parseInt(characterId ? characterId : ""));

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
                    </dl>
                </div>
            }
            <br/><Link to={"/"}>Back to List</Link>
        </>
    );
}