import CharacterCard from "./CharacterCard";

export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: NameAndUrl,
    location: NameAndUrl,
    image: string,
    episode: string[],
    url: string,
    created: string
}
type NameAndUrl = {
    name: string,
    url: string
}
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