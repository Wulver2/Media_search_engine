import MediaCard from "../components/MediaCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const media = [
        {id: "1", title: "Bladerunner", releaseDate: "1982"},
        {id: "2", title: "Red Dead Redemption 2", releaseDate: "2018"}
    ];

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
                    <MediaCard key={m.id} mediaData={{title: m.title, releaseDate: m.releaseDate}}>
                    </MediaCard>))}
            </div>
        </div>
    );
}

export default Home;