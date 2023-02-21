import {Episode} from "../model/Episode";
import {Link} from "react-router-dom";
import "./EpisodeCard.css";

type EpisodeCardProps = {
    episode: Episode
}

export default function EpisodeCard(props: EpisodeCardProps) {
    return (
        <div className={"card episode"}>
            <h2>{props.episode.name}</h2>
            <p>{props.episode.episode}</p>
            <p>Air Date: {props.episode.air_date}</p>
            <p>{props.episode.characters.length} Characters</p>
            <Link to={`/episodes/${props.episode.id}`}>Details</Link>
        </div>
    );
}