import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";
import "./Gallery.css";
import {useState} from "react";
import Searchbar from "./Searchbar";

type GalleryProps = {
    characters: Character[],
    startingAt: number,
    stoppingAt: number
}

export default function Gallery(props: GalleryProps) {
    const [searchInName, setSearchInName] = useState("");

    function handlePassSearchText(text: string): void {
        setSearchInName(text);
    }
    return (
        <>
            <Searchbar  passSearchText={handlePassSearchText}/>
            <div className="gallery">
                {props.characters
                    .filter(c => c.name.toLowerCase().includes(searchInName.toLowerCase()))
                    .slice(props.startingAt, props.stoppingAt)
                    .map(character => <CharacterCard character={character}/>)}
            </div>
        </>
    )
}