import { useMediaContext } from "../contexts/MediaContext"
import MediaCard from "../components/MediaCard"

function Favorite() {
    const { favorites } = useMediaContext();

    if (favorites) {
        console.log(favorites)
        return (
            <div className="media-grid">
                {favorites.map((m) => (
                    <MediaCard key={m.mal_id} mediaData={{
                        title: m.title, releaseDate: m.releaseDate,
                        img_url: m.img_url, id: m.id
                    }}>
                    </MediaCard>
                ))}

            </div>
        )
    }
    return (
        <div className="favorites">
            <h2>No favorites</h2>
        </div>
    )
}

export default Favorite