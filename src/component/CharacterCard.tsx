import {Character} from "../model/Character";
import "./CharacterCard.css";
import {Link} from "react-router-dom";


type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={`card ${props.character.status !== 'Alive' ? 'notAlive' : ''}`}>
            <h2>{props.character.name}</h2>
            <Link to={"/characters/" + props.character.id}><img src={props.character.image} alt="Character" /></Link>
            <p>Lives at: {props.character.location.name}</p>
        </div>
    )
}