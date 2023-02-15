import {Character} from "../model/Character";


type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={`card ${props.character.status !== 'Alive' ? 'notAlive' : ''}`}>
            <h3>{props.character.name}</h3>
            <img src={props.character.image} alt="Character" />
            <div>Lives at: {props.character.location.name}</div>
        </div>
    )
}