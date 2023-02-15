import {ChangeEvent} from "react";

type SearchbarProps = {
    passSearchText(text: string): void
}

export default function Searchbar(props: SearchbarProps) {
    function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
        props.passSearchText(e.target.value);
    }

    return (
        <>
            <p>Show only names containing: <input type={"text"} onChange={onInputChange} /></p>
        </>
    );
}