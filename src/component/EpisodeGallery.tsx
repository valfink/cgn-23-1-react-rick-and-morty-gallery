import {Episode} from "../model/Episode";
import EpisodeCard from "./EpisodeCard";

type EpisodeGalleryProps = {
    episodes: Episode[]
}

export default function EpisodeGallery(props: EpisodeGalleryProps) {
    // const {episodes} = useEpisodes();

    const episodeCards = props.episodes
        .map(episode => <EpisodeCard key={"episode-" + episode.id} episode={episode} />)

    return (
        <div className={"gallery"}>
            {episodeCards}
        </div>
    );
}