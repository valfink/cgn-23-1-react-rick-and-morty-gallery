import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <h1>The Rick and Morty Characters Gallery</h1>
            <nav>
                <Link to={"/characters"}>Character Gallery</Link>
                <Link to={"/episodes"}>Episodes Gallery</Link>
            </nav>
        </header>
    );
}