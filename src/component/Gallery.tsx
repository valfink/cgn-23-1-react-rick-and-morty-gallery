import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";
import "./Gallery.css";

type GalleryProps = {
    characters: Character[],
    startingAt: number,
    stoppingAt: number
}

export default function Gallery(props: GalleryProps) {
    return (
        <div className="gallery">
            {props.characters.slice(props.startingAt, props.stoppingAt).map(character => <CharacterCard  character={character}/>)}
        </div>
    )
}