import {Character} from "../model/Character";
import "./CharacterCard.css";


type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={`card ${props.character.status !== 'Alive' ? 'notAlive' : ''}`}>
            <h2>{props.character.name}</h2>
            <img src={props.character.image} alt="Character" />
            <p>Lives at: {props.character.location.name}</p>
        </div>
    )
}