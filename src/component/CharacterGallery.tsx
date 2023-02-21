import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";
import "./CharacterGallery.css";
import {useState} from "react";
import Searchbar from "./Searchbar";
import NoResultsCard from "./NoResultsCard";

type GalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: GalleryProps) {
    const [searchInName, setSearchInName] = useState("");

    function handlePassSearchText(text: string): void {
        setSearchInName(text);
    }

    const characterCards = props.characters
        .filter(c => c.name.toLowerCase().includes(searchInName.toLowerCase()))
        .map(character => <CharacterCard key={"character-" + character.id} character={character}/>);

    return (
        <>
            <Searchbar  passSearchText={handlePassSearchText}/>
            <div className="gallery">
                {characterCards.length > 0 ? characterCards : <NoResultsCard />}
            </div>
        </>
    )
}