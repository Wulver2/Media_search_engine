import MediaCard from "../components/MediaCard"
import { useState, useEffect } from "react";
import { getTopAnime } from "../services/api";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const loadTopAnime = async () => {
            try {
                const top = await getTopAnime();
                setMedia(top)
            } catch (error) {
                console.error(error);
            }
        }
        loadTopAnime();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div className="home">
            <form className="search-form">
                <input type="text" placeholder="Search" className="search-input"
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div className="media-grid">
                {media.map((m) => (
                    m.title.toLowerCase().startsWith(searchQuery) &&
                    <MediaCard key={m.mal_id} mediaData={{
                        title: m.title_english, releaseDate: m.aired.from,
                        img_url: m.images.jpg.image_url, id: m.mal_id
                    }}>
                    </MediaCard>
                ))}

            </div>
        </div>
    );
}

export default Home;