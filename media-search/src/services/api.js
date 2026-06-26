// need to create dot env file to hide my keys
const MOVIE_API_KEY = "";
const MOVIE_URL = "";

const ANIME_URL = "https://api.jikan.moe/v4/"
export const getTopAnime = async() => {
    const res = await fetch(`${ANIME_URL}top/anime`)
    const data = await res.json()
    return data.data
}

// Find an api for videogames as well
// (TV as well if movie api doesn't include them)