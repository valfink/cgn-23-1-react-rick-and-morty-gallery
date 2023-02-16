import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";
import "./Gallery.css";
import {useState} from "react";
import Searchbar from "./Searchbar";
import NoResultsCard from "./NoResultsCard";

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

    const characterCards = props.characters
        .filter(c => c.name.toLowerCase().includes(searchInName.toLowerCase()))
        .slice(props.startingAt, props.stoppingAt)
        .map(character => <CharacterCard character={character}/>);

    return (
        <>
            <Searchbar  passSearchText={handlePassSearchText}/>
            <div className="gallery">
                {characterCards.length > 0 ? characterCards : <NoResultsCard />}
            </div>
        </>
    )
}