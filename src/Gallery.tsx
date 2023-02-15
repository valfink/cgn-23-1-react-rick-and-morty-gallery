import CharacterCard from "./CharacterCard";
import {Character} from "./Character";

type GalleryProps = {
    characters: Character[]
}

export default function Gallery(props: GalleryProps) {
    return (
        <div className="gallery">
            {props.characters.map(character => <CharacterCard  character={character}/>)}
        </div>
    )
}