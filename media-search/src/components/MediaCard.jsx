import "../css/MediaCard.css"
import { useMediaContext } from "../contexts/MediaContext"

function MediaCard({mediaData}) {
    const {isFavorite, addFavorite, removeFavorite} = useMediaContext();
    const favorite = isFavorite(mediaData.id)

    const onFavoriteClick = (e) => {
        e.preventDefault()

        if (favorite == true) {
            favorite == false;
            removeFavorite(mediaData.id);
        }
        else {
            favorite == true;
            addFavorite(mediaData);
        }

    }

    return (
        <div className="media-card">
            <div className="media-img">
                <img src={mediaData.img_url} alt={mediaData.title} />
                <div>
                    <button onClick={(e) => onFavoriteClick(e)} className={`favorite-btn ${favorite ? "favorited" : ""}`}>
                        ★
                    </button>
                </div>
            </div>
            <div className="media-info">
                {/* title of media, description, etc*/}
                <h3>{mediaData.title}</h3>
                <p>{mediaData.releaseDate.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MediaCard