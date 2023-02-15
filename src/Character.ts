import {NameAndUrl} from "./NameAndUrl";

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